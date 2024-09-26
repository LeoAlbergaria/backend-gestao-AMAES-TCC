import { IsString, IsEmail, IsNotEmpty, IsEnum, IsDateString, MinLength } from 'class-validator';
import { UserType } from '../enums/user-type.enum';
import { UserRole } from '../enums/user-role.enum';
import { Unit } from '../enums/unit.enum';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsDateString()
    birthDate: string;

    @IsString()
    @IsNotEmpty()
    cellPhone: string;

    @IsString()
    @IsNotEmpty()
    CPF: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(UserType)
    type: UserType;

    @IsEnum(UserRole)
    role: UserRole;

    @IsEnum(Unit)
    unit: Unit;
}