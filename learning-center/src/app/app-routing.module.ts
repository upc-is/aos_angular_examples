import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StudentsComponent} from "./students/pages/students/students.component";
import {AboutComponent} from "./public/about/about.component";
import {HomeComponent} from "./public/home/home.component";
import {SkillsComponent} from "./skills/pages/skills/skills.component";
import {TeachersComponent} from "./teachers/pages/teachers/teachers.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: 'students', component: StudentsComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
