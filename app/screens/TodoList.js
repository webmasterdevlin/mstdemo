import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
import { inject, observer } from "mobx-react";
import { v4 } from "uuid";
import TodoStore from "../stores/TodoStore";
import {
  Container,
  Footer,
  Content,
  View,
  Text,
  Button,
  Icon,
  SwipeRow,
  Fab,
  Spinner
} from "native-base";

class TodoList extends Component {
  componentDidMount() {
    TodoStore.loadTodos();
  }

  handleUpdateTodo = todo => {
    TodoStore.strikethroughTodo(todo);
  };

  handleDeleteTodo = todo => {
    Alert.alert("Deleting Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => {
          TodoStore.removeTodo(todo);
        },
        styles: "destructive"
      }
    ]);
  };

  render() {
    return (
      <Container>
        <Content scrollEnabled={true}>
          {TodoStore.isLoading ? (
            <Spinner color="blue" />
          ) : (
            TodoStore.todos.map(t => (
              <SwipeRow
                key={t.id}
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                  <Button success onPress={() => this.handleUpdateTodo(t)}>
                    <Icon active name="create" />
                  </Button>
                }
                body={
                  <View style={styles.cell}>
                    <View>
                      <Text
                        style={
                          t.isDone
                            ? {
                                textDecorationLine: "line-through",
                                textDecorationStyle: "solid"
                              }
                            : {}
                        }
                      >
                        {t.id}
                      </Text>
                    </View>
                  </View>
                }
                right={
                  <Button danger onPress={() => this.handleDeleteTodo(t)}>
                    <Icon active name="trash" />
                  </Button>
                }
              />
            ))
          )}
        </Content>
        <View style={{ flex: 0.2 }}>
          <Fab
            position="bottomRight"
            onPress={() => TodoStore.createTodo({ id: v4() })}
            style={{ backgroundColor: "#9C27B0" }}
          >
            <Icon name="add" />
          </Fab>
        </View>

        <Footer style={styles.footer}>
          <Text style={styles.footerText} note>
            Remaining todos: {TodoStore.remainingTodos}
          </Text>
        </Footer>
      </Container>
    );
  }
}
export default inject("TodoStore")(observer(TodoList));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20
  },
  cell: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  footer: {
    backgroundColor: "#9C27B0",
    alignItems: "center"
  },
  footerText: {
    color: "white",
    fontSize: 32
  }
});
