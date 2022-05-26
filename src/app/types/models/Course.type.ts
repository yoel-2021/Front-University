import { StudentsService } from "src/app/services/students/students.service"
import { Student } from "./Student.type"

export type Course= {
    id: number,
    name: string,
    shortDescription: string,
    description: string,
    level : number,
   
}