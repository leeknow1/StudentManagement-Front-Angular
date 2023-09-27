import { createEntityAdapter } from "@ngrx/entity";
import { StudentModels, StudentModel } from "./student.model";

export const studentAdapter = createEntityAdapter<StudentModel>();

export const initialStudentState: StudentModels = studentAdapter.getInitialState({
    errorMessage: ''
});