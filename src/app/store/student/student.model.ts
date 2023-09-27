import { EntityState } from "@ngrx/entity"

export interface StudentModel {
    id: number,
    firstName: string,
    lastName: string,
    mark: number
}

export interface StudentModels extends EntityState<StudentModel>{
    errorMessage: string
}