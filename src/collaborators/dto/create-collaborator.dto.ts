import { IsString, IsEmail, IsOptional, IsEnum, IsNumber, IsDateString } from 'class-validator';
import { WorkRegime } from '../enums/work-regime.enum';
import { WorkLoad } from '../enums/work-load.enum'; 
import { ApiProperty } from '@nestjs/swagger';

export class CreateCollaboratorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cellPhone?: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  RG: string;

  @ApiProperty()
  @IsString()
  CPF: string;

  @ApiProperty()
  @IsDateString()
  birthDate: string;

  @ApiProperty()
  @IsString()
  nationality: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  voterId?: string;

  @ApiProperty()
  @IsString()
  maritalStatus: string;

  @ApiProperty()
  @IsString()
  CTPS: string;

  @ApiProperty()
  @IsString()
  PIS_PASEP: string;

  @ApiProperty()
  @IsDateString()
  admissionDate: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  resignationDate?: string;

  @ApiProperty()
  @IsString()
  field: string;

  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsNumber()
  salary: number;

  @ApiProperty()
  @IsEnum(WorkRegime)
  workRegime: WorkRegime;

  @ApiProperty()
  @IsEnum(WorkLoad)
  workLoad: WorkLoad;
}
