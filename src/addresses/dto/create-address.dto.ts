import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  address: string;

  @IsString()
  number: string;

  @IsString()
  complement: string;

  @IsString()
  cep: string;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}