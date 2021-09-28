import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
//now instead of using useSelector to get some state out of store ,we 'll infact use useTypeSelector hook --name suggest it has type info applied to it 