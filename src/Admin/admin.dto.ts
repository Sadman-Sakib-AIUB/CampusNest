import { IsDateString, IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class AdminDto{
//------------------------------------- User Category - 3 ---------------------------------------
    @IsString()
    @IsNotEmpty()
    @Matches(/^[A-Za-z\s]+$/, { message: 'Invalid Name'})
    name:string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z]).{6,}$/, {
    message: 'Password must be at least 6 characters and contain at least one lowercase letter'})
    password:string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^01\d{9}$/, {
    message: 'Phone number must start with 01 and be 11 digits long'})
    phone:string;

    @IsNotEmpty()
    @IsDateString({},{message: "Date must be YYYY-MM-DD"})
    dob:Date;
    
    acCalendar : string;


}

