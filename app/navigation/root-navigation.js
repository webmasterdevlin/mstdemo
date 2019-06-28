import { createAppContainer, createStackNavigator } from "react-navigation";
import TodoList from "../screens/TodoList";

const MainNavigator = createStackNavigator({
  todoList: {
    screen: TodoList,
    navigationOptions: () => ({
      title: "Mobx State Tree",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "#9C27B0"
      }
    })
  }
});

const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;
