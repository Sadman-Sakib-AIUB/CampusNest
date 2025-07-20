import { Injectable } from "@nestjs/common";

@Injectable()

export class TeacherService{

    getTeacher():string{
        return 'Teacher Service Running';
    }


}