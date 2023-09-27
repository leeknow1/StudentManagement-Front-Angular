import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StudentModel, StudentModels } from "./student.model";
import { studentAdapter } from "./student.state";

const getStudentState = createFeatureSelector<StudentModels>('student')

const studentSelectors = studentAdapter.getSelectors();

export const getStudents = createSelector(getStudentState, studentSelectors.selectAll);

const studentEntities = createSelector(getStudentState, studentSelectors.selectEntities);

export const getStudentById = (id: number) => createSelector(studentEntities, (state) => state[id]);

export const getErrorMessage = createSelector(getStudentState, (state) => state.errorMessage)