import { IsString, IsEmail, IsOptional, IsEnum, IsNumber, IsDateString } from 'class-validator';
import { WorkRegime } from '../enums/work-regime.enum';
import { WorkLoad } from '../enums/work-load.enum';   

export class CreateCollaboratorDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  cellPhone?: string;

  @IsEmail()
  email: string;

  @IsString()
  RG: string;

  @IsString()
  CPF: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  voterId?: string;

  @IsString()
  maritalStatus: string;

  @IsString()
  CTPS: string;

  @IsString()
  PIS_PASEP: string;

  @IsDateString()
  admissionDate: string;

  @IsOptional()
  @IsDateString()
  resignationDate?: string;

  @IsString()
  field: string;

  @IsString()
  role: string;

  @IsNumber()
  salary: number;

  @IsEnum(WorkRegime)
  workRegime: WorkRegime;

  @IsEnum(WorkLoad)
  workLoad: WorkLoad;
}
