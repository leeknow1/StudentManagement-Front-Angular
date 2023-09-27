import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { addStudent, updateStudent } from 'src/app/store/student/student.action';
import { StudentModel } from 'src/app/store/student/student.model';
import { getStudentById } from 'src/app/store/student/student.selector';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  title = '';
  editId = 0;
  editData!: StudentModel;

  constructor(
    private dialogRef: MatDialogRef<AddStudentComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.title = this.data.title
    if (this.data.isEdit) {
      this.editId = this.data.id;
      this.store.select(getStudentById(this.editId)).subscribe(data => {
        this.editData = data as StudentModel;
      })
      this.studentForm.setValue(
        {
          id: this.editData.id,
          firstName: this.editData.firstName,
          lastName: this.editData.lastName,
          mark: this.editData.mark
        })
    }
  }

  studentForm = this.builder.group({
    id: this.builder.control(0),
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    mark: this.builder.control(0, Validators.required)
  })

  closeForm() {
    this.dialogRef.close();
  }

  saveStudent() {
    if (this.studentForm.valid) {
      const student: StudentModel = {
        id: 0,
        firstName: this.studentForm.value.firstName as string,
        lastName: this.studentForm.value.lastName as string,
        mark: this.studentForm.value.mark as number
      }
      if (this.data.isEdit) {
        student.id = this.studentForm.value.id as number;
        this.store.dispatch(updateStudent({student: student}))
      } else {
        this.store.dispatch(addStudent({ student: student }));
      }
      this.closeForm();
    }
  }
}
