import { IsString, IsEmail, IsNotEmpty, IsEnum, IsDateString, MinLength } from 'class-validator';
import { UserType } from '../enums/user-type.enum';
import { UserRole } from '../enums/user-role.enum';
import { Unit } from '../enums/unit.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsDateString()
    birthDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cellPhone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    CPF: string;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty()
    @IsEnum(UserType)
    type: UserType;

    @ApiProperty()
    @IsEnum(UserRole)
    role: UserRole;

    @ApiProperty()
    @IsEnum(Unit)
    unit: Unit;
}