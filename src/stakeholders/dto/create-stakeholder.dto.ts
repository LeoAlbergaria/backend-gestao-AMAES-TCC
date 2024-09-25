import { IsString, IsNotEmpty, IsOptional, IsEmail, Length } from 'class-validator';

export class CreateStakeholderDto {
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsOptional()
    @Length(11, 14)
    CPF?: string;
  
    @IsOptional()
    @Length(14, 18)
    CNPJ?: string;
  
    @IsOptional()
    phone?: string;
  
    @IsOptional()
    cellPhone?: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    representative: string;
  }

