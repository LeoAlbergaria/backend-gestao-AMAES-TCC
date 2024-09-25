import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stakeholder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 14, nullable: true })
  CPF?: string;

  @Column({ type: 'varchar', length: 18, nullable: true })
  CNPJ?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  cellPhone?: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  representative: string;
}