import {
  SearchRepositoriesAction,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesErrorAction,
} from "./interfaces";

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
