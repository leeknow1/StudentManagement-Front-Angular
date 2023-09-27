import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentModel } from "../store/student/student.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class MasterService {
    constructor(private http: HttpClient) {
    }

    getAllStudent() :Observable<StudentModel[]> {
        return this.http.get<StudentModel[]>('http://localhost:8010/api/student')
    }

    getOneStudent(id: any) {
        return this.http.get<StudentModel>('http://localhost:8010/api/student/' + id)
    }

    addStudent(student: StudentModel) {
        return this.http.post('http://localhost:8010/api/student', student);
    }

    updateStudent(student: StudentModel) {
        return this.http.put('http://localhost:8010/api/student', student);
    }

    deleteStudent(id: number) {
        return this.http.delete('http://localhost:8010/api/student/' + id);
    }   
}