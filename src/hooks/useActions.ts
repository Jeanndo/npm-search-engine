import { useAppDispatch } from "./../redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./../redux";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
