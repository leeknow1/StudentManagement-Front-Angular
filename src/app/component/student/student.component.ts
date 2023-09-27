import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { StudentModel } from 'src/app/store/student/student.model';
import { getErrorMessage, getStudents} from 'src/app/store/student/student.selector';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/component/student-add/add-student.component';
import { deleteStudent, loadStudents } from 'src/app/store/student/student.action';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList !: StudentModel[];
  errorMessage = '';
  selectedValue = '';
  searchText: string = "";

  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudents())
    this.store.select(getErrorMessage).subscribe(data => {
      this.errorMessage = data;
    })
    this.store.select(getStudents).subscribe(data => {
      this.studentList = data;
    })
  }

  getValueFromSelect(event: any) {
    if (event.value === 'firstName') {
      this.sortStudentsByFirstName();
    }
    else {
      this.sortStudentsByLastName()
    }
  }

  sortStudentsByFirstName() {
    this.studentList = this.studentList.sort((a, b) => a.firstName.localeCompare(b.firstName))
  }

  sortStudentsByLastName() {
    this.studentList = this.studentList.sort((a, b) => a.lastName.localeCompare(b.lastName))
  }

  addStudent() {
    this.dialog.open(AddStudentComponent, {
      width: '50%',
      data: {
        id: 0,
        title: 'Добавить студента',
        isEdit: false
      }
    })
  }

  editStudent(id: any) {
    this.dialog.open(AddStudentComponent, {
      width: '50%',
      data: {
        id: id,
        title: 'Изменить студента',
        isEdit: true
      }
    })
  }

  deleteStudent(id: any) {
    this.store.dispatch(deleteStudent({id: id}));
  }
  
}
