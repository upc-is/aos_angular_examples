import { Skill } from "./skill";

export interface Competence {
  id: number;
  studentId: number;
  skillId: number;
  skill: Skill;
}
