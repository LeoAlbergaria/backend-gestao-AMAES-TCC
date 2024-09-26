import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'date', nullable: false })
  expirationDate: Date;

  @Column({ type: 'text', nullable: false })
  attachedDocument: string;
}