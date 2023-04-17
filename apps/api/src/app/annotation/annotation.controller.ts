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

import { JwtAuthGuard } from '../auth';
import { AnnotationService } from './annotation.service';
import { CreateAnnotationDto } from './dto/create-annotation.dto';
import { UpdateAnnotationDto } from './dto/update-annotation.dto';

/**
 * AnnotationController class.
 *
 * This controller handles the annotation.
 */
@ApiTags('annotations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('annotations')
export class AnnotationController {
  constructor(private readonly annotationService: AnnotationService) {}

  @Post()
  create(@Body() createAnnotationDto: CreateAnnotationDto) {
    return this.annotationService.create(createAnnotationDto);
  }

  @Get()
  findAll() {
    return this.annotationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annotationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnotationDto: UpdateAnnotationDto
  ) {
    return this.annotationService.update(+id, updateAnnotationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annotationService.remove(+id);
  }
}
