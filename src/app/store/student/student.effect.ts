import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";
import { MasterService } from "src/app/service/master.service";
import { addStudent, addStudentSuccess, deleteStudent, deleteStudentSuccess, loadOneStudent, loadOneStudentSuccess, loadStudents, loadStudentsFail, loadStudentsSuccess, updateStudent, updateStudentSuccess } from "./student.action";
import { StudentModel } from "./student.model";
import { Update } from "@ngrx/entity";

@Injectable()
export class StudentEffects {
    constructor(private action$: Actions, private service: MasterService) {
    }

    students = createEffect(() => 
        this.action$.pipe(  
            ofType(loadStudents),
            exhaustMap(() => {
                return this.service.getAllStudent().pipe(
                    map((data) => {
                        return loadStudentsSuccess({students: data})
                    }),
                    catchError((error) => of(loadStudentsFail({error: error.message})))
                )
            })
        )
    )

    oneStudent = createEffect(() =>
        this.action$.pipe(
            ofType(loadOneStudent),
            exhaustMap((action) => {
                return this.service.getOneStudent(action.id).pipe(
                    map((data) => {
                        return loadOneStudentSuccess({student: data})
                    })
                )
            })
        )
    )

    deleteStudent = createEffect(() => 
        this.action$.pipe(  
            ofType(deleteStudent),
            exhaustMap(action => {
                return this.service.deleteStudent(action.id).pipe(
                    map(() => {
                        return deleteStudentSuccess({id: action.id})
                    })
                )
            })
        )
    )

    addedStudent = createEffect(() => 
        this.action$.pipe(  
            ofType(addStudent),
            exhaustMap(action => {
                return this.service.addStudent(action.student).pipe(
                    map((data) => {
                        return addStudentSuccess({student: data as StudentModel})
                    })
                )
            })
        )
    )

    updateStudent = createEffect(() => 
        this.action$.pipe(  
            ofType(updateStudent),
            exhaustMap(action => {
                return this.service.updateStudent(action.student).pipe(
                    map((data) => {
                        const updatedStudent: Update<StudentModel> = {
                            id: action.student.id,
                            changes: action.student
                        }
                        return updateStudentSuccess({student: updatedStudent})
                    })
                )
            })
        )
    )
}