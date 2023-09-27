import { routerReducer } from "@ngrx/router-store";
import { studentReducer } from "../student/student.reducer";

export const AppState = {
    student: studentReducer,
    router: routerReducer
}