import { types } from "mobx-state-tree";

export const TodoType = {
  id: types.identifier,
  isDone: types.optional(types.boolean, false)
};

export const TodoInitialState = {
  id: "",
  isDone: false
};
