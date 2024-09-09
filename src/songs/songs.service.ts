import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  create(createSongDTO: CreateSongDto) {
    return createSongDTO;
  }

  findAll() {
    // throw new Error('Method not implemented.');
    return `This action returns all songs`;
  }
}
