import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Skill} from "../../model/skill";
import {MatTableDataSource} from "@angular/material/table";
import {SkillsService} from "../../services/skills.service";
import {MatPaginator} from "@angular/material/paginator";
import {Student} from "../../../students/model/student";
import * as _ from "lodash";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillData: Skill;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'actions'];

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

  addSKill() {
    //this.studentData.id = 0;
    this.skillsService.create(this.skillData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  editItem(element: Skill) {
    console.log("Updating");
    this.skillData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.skillForm.resetForm();
  }

  deleteItem(id: number) {
    console.log("Deleting")
  }

  onSubmit() {
    if (this.skillForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateSkill();
      } else {
        console.log('about to add');
        this.addSKill();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
  updateSkill() {
    this.skillsService.update(this.skillData.id, this.skillData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Skill) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }
}
