import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { getRouterParamId } from 'src/app/store/router/router.selector';
import { loadOneStudent } from 'src/app/store/student/student.action';
import { StudentModel } from 'src/app/store/student/student.model';
import { getStudentById } from 'src/app/store/student/student.selector';

@Component({
  selector: 'app-one-student-page',
  templateUrl: './one-student-page.component.html',
  styleUrls: ['./one-student-page.component.css']
})
export class OneStudentPageComponent implements OnInit {

  student!: StudentModel;
  studentId: any;

  constructor(private store: Store<AppStateModel>) {
  }

  ngOnInit(): void {
    this.store.select(getRouterParamId).subscribe((data) => {
      this.studentId = data;
    })
    this.store.dispatch(loadOneStudent({id: this.studentId}));
    this.store.select(getStudentById(this.studentId)).subscribe(data => {
      this.student = data as StudentModel;
    })
  }
}