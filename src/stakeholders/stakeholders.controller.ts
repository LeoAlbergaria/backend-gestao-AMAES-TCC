import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StakeholdersService } from './stakeholders.service';
import { CreateStakeholderDto } from './dto/create-stakeholder.dto';
import { UpdateStakeholderDto } from './dto/update-stakeholder.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Stakeholders')
@Controller('stakeholders')
export class StakeholdersController {
  constructor(private readonly stakeholdersService: StakeholdersService) {}

  @Post()
  create(@Body() createStakeholderDto: CreateStakeholderDto) {
    return this.stakeholdersService.create(createStakeholderDto);
  }

  @Get()
  findAll() {
    return this.stakeholdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stakeholdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStakeholderDto: UpdateStakeholderDto) {
    return this.stakeholdersService.update(+id, updateStakeholderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stakeholdersService.remove(+id);
  }
}
