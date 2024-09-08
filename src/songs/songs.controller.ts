import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  async create(@Body() createSongDTO: CreateSongDto) {
    return await this.songsService.create(createSongDTO);
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
