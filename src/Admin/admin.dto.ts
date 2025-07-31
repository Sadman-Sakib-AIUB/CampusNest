import { IsDateString, IsEmail, IsEnum, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Matches, Max, MaxLength, Min } from "class-validator";
import { AdminStatus } from "./admin.entity";
import { Type } from "class-transformer";

export class AdminDto{
    
    @IsString({ message: 'Full name must be a string' })
    @IsNotEmpty({ message: 'Full name is required' })
    @MaxLength(100, { message: 'Full name must be at most 100 characters' })
    @Matches(/^[A-Za-z\s]+$/, { message: 'Full name must only contain letters and spaces' })
    fullname: string;

    @IsString()
    @IsNotEmpty({message:"Username is Required"})
    username: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty({message:"Email is Required"})
    email:string;
    
    @IsString()
    @IsNotEmpty({message:"Password is Required"})
    @Matches(/^(?=.*[a-z]).{6,}$/, {message: 'Password must be at least 6 characters and contain at least one lowercase letter'})
    password:string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^01\d{9}$/, {message: 'Phone number must start with 01 and be 11 digits long'})
    phone:string;

    @Type(() => Number)
    @IsInt({message:"Age Must be integer"})
    @Min(18,{message:"Age must be atleast 18"})
    @Max(100,{message:"Age must be less than 100"})
    @IsNotEmpty({message:"Age is Required"})
    age:number;

    @IsOptional()
    @IsEnum(AdminStatus,{message:"Status must be either Active or Inactive"})
    status?:AdminStatus;
    
    acCalendar : string;


}


export class UpdateStatusDto{
    @IsEnum(AdminStatus, { message: 'Status must be either active or inactive' })
    status: AdminStatus;
}


