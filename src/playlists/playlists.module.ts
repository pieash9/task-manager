import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { Song } from 'src/songs/songs.entity';
import { User } from 'src/users/entities/user.entity';
import { PlayListsService } from './playlists.service';
import { PlayListsController } from './playlists.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Playlist, Song, User])],
  controllers: [PlayListsController],
  providers: [PlayListsService],
})
export class PlayListModule {}
