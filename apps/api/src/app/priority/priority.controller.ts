import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { PriorityService } from './priority.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

/**
 * PriorityController class.
 *
 * This controller handles the priority.
 */
@ApiTags('priorities')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('priorities')
export class PriorityController {
  constructor(private readonly priorityService: PriorityService) {}

  @Post()
  create(@Body() createPriorityDto: CreatePriorityDto) {
    return this.priorityService.create(createPriorityDto);
  }

  @Get()
  findAll() {
    return this.priorityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priorityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePriorityDto: UpdatePriorityDto
  ) {
    return this.priorityService.update(+id, updatePriorityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priorityService.remove(+id);
  }
}
