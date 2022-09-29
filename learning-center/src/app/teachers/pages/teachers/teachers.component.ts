import {Component, OnInit, ViewChild} from '@angular/core';
import {Teacher} from "../../model/teacher";
import {MatTableDataSource} from "@angular/material/table";
import {TeachersService} from "../../services/teachers.service";
import {NgForm} from "@angular/forms";
import * as _ from "lodash";
import {Student} from "../../../students/model/student";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teacherData: Teacher;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'codigo', 'actions'];

  @ViewChild('teacherForm', {static: false})
  teacherForm!: NgForm;

  isEditMode = false; // Edit = true, Add = false

  constructor(private teachersService: TeachersService) {
    this.teacherData = {} as Teacher;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teachersService.getAll().subscribe( (response: any) => {
        this.dataSource.data = response;
      }
    );
  }

  onSubmit() {
    if (this.teacherForm.form.valid) {
      if (this.isEditMode) {
        this.updateTeacher();
        console.log("Update teacher");
      } else {
        this.addTeacher();
        console.log("Add new teacher");
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }

  }

  addTeacher() {
    this.teacherData.id = 0;
    this.teachersService.create(this.teacherData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });

  }

  updateTeacher() {
    this.teachersService.update(this.teacherData.id, this.teacherData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Student) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  cancelEdit() {
    this.isEditMode = false;
    this.teacherForm.resetForm();
    console.log("Canceling");
  }

  editItem(element: Teacher) {
    this.teacherData = _.cloneDeep(element);
    this.isEditMode = true;
  }

}
