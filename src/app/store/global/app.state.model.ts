import { StudentModel, StudentModels } from "../student/student.model";

export interface AppStateModel {
    student: StudentModel,
    students: StudentModels
}