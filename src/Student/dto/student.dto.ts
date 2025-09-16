// import { Type } from 'class-transformer';
// import {
//   IsEmail,
//   Matches,
//   IsNotEmpty,
//   MinLength,
//   IsIn,
//   IsOptional,
//   IsString,
  
// } from 'class-validator';

// export class CreateStudentDto {
  
//   @IsNotEmpty({ message: 'Email is required' })
//   @IsEmail({}, { message: 'Invalid email format' })
//   @Matches(/@aiub\.edu$/, {
//     message: 'Email must be from aiub.edu domain',
//   })
//   email: string;

//   @IsNotEmpty({ message: 'Password is required' })
//   @MinLength(6, {
//     message: 'Password must be at least 6 characters long',
//   })
//   @Matches(/[A-Z]/, {
//     message: 'Password must contain at least one uppercase letter',
//   })
//   password: string;

//   @IsNotEmpty({ message: 'Gender is required' })
//   @IsIn(['male', 'female','other'], {
//     message: 'Gender must be either male or female',
//   })
//   gender: string;

//   @Type(()=> Number) 
//   @IsNotEmpty({ message: 'Phone number is required' }) 
//   phoneNumber: number;

//   @IsOptional()
//   @IsString({ message: 'Address must be a string' })
//   address?: string;

//   @IsOptional()
//   @IsString({ message: 'Profile picture filename must be a string' })
//   profilePic?: string;
//   static profilePic: any;
// }
