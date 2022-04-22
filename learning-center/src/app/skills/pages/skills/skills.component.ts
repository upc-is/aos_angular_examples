import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Skill} from "../../model/skill";
import {MatTableDataSource} from "@angular/material/table";
import {SkillsService} from "../../services/skills.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillData: Skill;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name'];

  @ViewChild('skillForm', {static: false})
  skillForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  isEditMode = false;

  constructor(private skillsService: SkillsService) {
    this.skillData = {} as Skill;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllSkills();
  }

  getAllSkills() {
    this.skillsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  cancelEdit() {

  }

  onSubmit() {

  }
}
