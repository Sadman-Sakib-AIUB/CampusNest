import { Controller,Get } from "@nestjs/common";
import { TeacherService } from "./teacher.service";


@Controller('teacher')
 export class TeacherController{
 
    constructor(private readonly teacherService:TeacherService){}


@Get()
 getTeacher():string{

    return this.teacherService.getTeacher();
 }



 }



