import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDocumentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty() 
    expirationDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    attachedDocument: string;
  }

