import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../model/teacher";
import {MatTableDataSource} from "@angular/material/table";
import {TeachersService} from "../../services/teachers.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teacherData: Teacher;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'codigo', 'actions'];

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

}
