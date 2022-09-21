import { ITarefa } from "../../types/ITarefa";

export type RootStackParamList = {
    Home: undefined,
    CreateTask: undefined,
    Pomodoro: {tarefa: ITarefa}
};
