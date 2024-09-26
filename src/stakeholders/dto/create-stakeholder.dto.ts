import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEmail, Length } from 'class-validator';

export class CreateStakeholderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsOptional()
    @Length(11, 14)
    CPF?: string;
  
    @ApiProperty()
    @IsOptional()
    @Length(14, 18)
    CNPJ?: string;
  
    @ApiProperty()
    @IsOptional()
    phone?: string;
  
    @ApiProperty()
    @IsOptional()
    cellPhone?: string;
  
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    representative: string;
  }

