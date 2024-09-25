import { Injectable } from '@nestjs/common';
import { CreateStakeholderDto } from './dto/create-stakeholder.dto';
import { UpdateStakeholderDto } from './dto/update-stakeholder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stakeholder } from './entities/stakeholder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StakeholdersService {
  constructor(
    @InjectRepository(Stakeholder)
    private readonly stakeholdersRepository: Repository<Stakeholder>) {
  }

  async create(createStakeholderDto: CreateStakeholderDto): Promise<Stakeholder> {
    const stakeholder = this.stakeholdersRepository.create(createStakeholderDto);
    return await this.stakeholdersRepository.save(stakeholder);
  }

  async findAll(): Promise<Stakeholder[]> {
    return await this.stakeholdersRepository.find();
  }

  async findOne(id: number): Promise<Stakeholder> {
    return await this.stakeholdersRepository.findOneBy({ id });
  }

  async update(id: number, updateStakeholderDto: UpdateStakeholderDto): Promise<Stakeholder> {
    await this.stakeholdersRepository.update(id, updateStakeholderDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.stakeholdersRepository.delete(id);
  }
}