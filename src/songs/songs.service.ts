import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './songs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  async create(createSongDTO: CreateSongDto): Promise<Song> {
    const song = new Song();
    song.title = createSongDTO.title;
    song.artists = createSongDTO.artists;
    song.duration = createSongDTO.duration;
    song.lyrics = createSongDTO.lyrics;
    song.releasedDate = createSongDTO.releasedDate;
    return await this.songsRepository.save(song);
  }

  async findAll(): Promise<Song[]> {
    return await this.songsRepository.find();
  }

  async findOne(id: number): Promise<Song> {
    return await this.songsRepository.findOne({ where: { id } });
  }

  update(id: number, recordToUpdate: UpdateSongDto): Promise<UpdateResult> {
    return this.songsRepository.update(id, recordToUpdate);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.songsRepository.delete(id);
  }
}
