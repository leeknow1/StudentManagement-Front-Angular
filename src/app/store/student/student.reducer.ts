import { createReducer, on } from "@ngrx/store"
import { initialStudentState, studentAdapter } from "./student.state"
import { addStudentSuccess, deleteStudent, loadOneStudentSuccess, loadStudentsFail, loadStudentsSuccess, updateStudentSuccess } from "./student.action";

const _studentReducer = createReducer(initialStudentState,
    on(loadStudentsSuccess, (state, action) => {
        return studentAdapter.setAll(action.students, {
            ...state, errorMessage: ''
        });
    }),
    on(loadStudentsFail, (state, action) => {
        return {...state, errorMessage: action.error}
    }),
    on(loadOneStudentSuccess, (state, action) => {
        return studentAdapter.setOne(action.student, state);
    }),
    on(addStudentSuccess, (state, action) => {
        return studentAdapter.addOne(action.student, state);
    }),
    on(updateStudentSuccess, (state, action) => {
        return studentAdapter.updateOne(action.student, state)
    }),
    on(deleteStudent, (state, action) => {
        return studentAdapter.removeOne(action.id, state);
    })
)

export function studentReducer(state: any, action: any) {
    return _studentReducer(state, action);
}