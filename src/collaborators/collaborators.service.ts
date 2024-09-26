import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorDto } from './dto/create-collaborator.dto';
import { UpdateCollaboratorDto } from './dto/update-collaborator.dto';
import { Collaborator } from './entities/collaborator.entity';

@Injectable()
export class CollaboratorsService {
  constructor(
    @InjectRepository(Collaborator)
    private readonly collaboratorsRepository: Repository<Collaborator>,
  ) {}

  async create(createCollaboratorDto: CreateCollaboratorDto): Promise<Collaborator> {
    const collaborator = this.collaboratorsRepository.create(createCollaboratorDto);
    return await this.collaboratorsRepository.save(collaborator);
  }

  async findAll(): Promise<Collaborator[]> {
    return await this.collaboratorsRepository.find();
  }

  async findOne(id: number): Promise<Collaborator> {
    return await this.collaboratorsRepository.findOneBy({ id });
  }

  async update(id: number, updateCollaboratorDto: UpdateCollaboratorDto): Promise<Collaborator> {
    await this.collaboratorsRepository.update(id, updateCollaboratorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.collaboratorsRepository.delete(id);
  }
}
