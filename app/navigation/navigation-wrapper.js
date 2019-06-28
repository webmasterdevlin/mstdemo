import React from "react";
import { Provider } from "mobx-react";
import TodoStore from "../stores/TodoStore";
import RootNavigation from "./root-navigation";

const stores = {
  TodoStore
};

class NavigationWrapper extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <RootNavigation />
      </Provider>
    );
  }
}
export default NavigationWrapper;
