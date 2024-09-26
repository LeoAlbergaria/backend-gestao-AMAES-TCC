import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../enums/user-type.enum';
import { UserRole } from '../enums/user-role.enum';
import { Unit } from '../enums/unit.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ type: 'date', nullable: false })
  birthDate: Date;

  @Column({ nullable: true })
  cellPhone?: string;

  @Column({ unique: true, nullable: false })
  CPF: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.COMUM,
    nullable: false,
  })
  type: UserType;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.OPERADOR,
    nullable: false,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: Unit,
    nullable: false,
  })
  unit: Unit;
}