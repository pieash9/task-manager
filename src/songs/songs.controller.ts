import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This create returns a new song';
  }

  @Get()
  findAll() {
    return 'This  returns all songs';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This get one returns a ${id} song`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This update returns a ${id} song`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This delete returns a ${id} song`;
  }
}
