import { createAction, props } from "@ngrx/store";
import { StudentModel } from "./student.model";
import { Update } from "@ngrx/entity";

export const loadStudents = createAction('[student page] loadStudent')

export const loadStudentsSuccess = createAction('[student page] loadStudent success', props<{students: StudentModel[]}>())

export const loadStudentsFail = createAction('[student page] loadStudent fail', props<{error: string}>())

export const loadOneStudent = createAction('[student page] loadOneStudent', props<{id: any}>())

export const loadOneStudentSuccess = createAction('[student page] loadOneStudentSuccess', props<{student: StudentModel}>())

export const addStudent = createAction('[student page] addStudent', props<{student: StudentModel}>())

export const addStudentSuccess = createAction('[student page] addStudentSuccess', props<{student: StudentModel}>())

export const updateStudent = createAction('[student page] updateStudent', props<{student: StudentModel}>())

export const updateStudentSuccess = createAction('[student page] updateStudentSuccess', props<{student:Update<StudentModel>}>())

export const deleteStudent = createAction('[student page] deleteStudent', props<{id: number}>())

export const deleteStudentSuccess = createAction('[student page] deleteStudentSuccess', props<{id: number}>())