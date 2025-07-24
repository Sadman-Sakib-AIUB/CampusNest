import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService{
  getStudent(): string{
    return 'student server is running';
  }

}
  
