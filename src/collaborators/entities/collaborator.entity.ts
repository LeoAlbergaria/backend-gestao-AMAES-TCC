import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { WorkRegime } from '../enums/work-regime.enum';
import { WorkLoad } from '../enums/work-load.enum';
import { Address } from 'src/addresses/entities/address.entity';

@Entity()
export class Collaborator {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    phone?: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    cellPhone?: string;

    @Column({ type: 'text', nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    RG: string;

    @Column({ type: 'varchar', length: 14, nullable: false })
    CPF: string;

    @Column({ type: 'date', nullable: false })
    birthDate: Date;

    @Column({ type: 'text', nullable: false })
    nationality: string;

    @Column({ type: 'varchar', length: 12, nullable: true })
    voterId?: string;

    @Column({ type: 'text', nullable: false })
    maritalStatus: string;

    @Column({ type: 'text', nullable: false })
    CTPS: string;

    @Column({ type: 'text', nullable: false })
    PIS_PASEP: string;

    @Column({ type: 'date', nullable: false })
    admissionDate: Date;

    @Column({ type: 'date', nullable: true })
    resignationDate?: Date;

    @Column({ type: 'text', nullable: false })
    field: string;

    @Column({ type: 'text', nullable: false })
    role: string;

    @Column({ type: 'float', nullable: false })
    salary: number;

    @Column({
        type: 'enum',
        enum: WorkRegime,
        default: WorkRegime.CLT,
        nullable: false,
    })
    workRegime: WorkRegime;

    @Column({
        type: 'enum',
        enum: WorkLoad,
        default: WorkLoad.H40,
        nullable: false,
    })
    workLoad: WorkLoad;


  @OneToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;
}
