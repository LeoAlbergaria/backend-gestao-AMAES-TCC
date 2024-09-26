import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDocumentDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDateString()
    @IsNotEmpty() 
    expirationDate: string;

    @IsString()
    @IsNotEmpty()
    attachedDocument: string;
  }

