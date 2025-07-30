import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService{
  getStudent(): string{
    return 'student server is running';
  }
    getStudent1(): string{
    return 'student server is working.';
  }

}
  
