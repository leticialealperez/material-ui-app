import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./types-hooks";

// Utilizado para toda vez que desejamos atualizar o estado global
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Utilizado para toda vez que desejamos ler o valor do estado global
export const useAppSelector = useSelector.withTypes<RootState>();
