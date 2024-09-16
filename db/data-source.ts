import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Artist } from 'src/artist/entities/artist.entity';
import { Playlist } from 'src/playlists/entities/playlist.entity';
import { Song } from 'src/songs/songs.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      // host: configService.get<string>('dbHost'),
      // port: configService.get<number>('dbPort'),
      // username: configService.get<string>('username'),
      // database: configService.get<string>('dbName'),
      // password: configService.get<string>('password'),
      url: configService.get<string>('DATABASE_URL'),
      entities: [User, Playlist, Artist, Song],
      synchronize: false,
      migrations: ['dist/db/migrations/*.js'],
    };
  },
};
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  // host: process.env.DB_HOST,
  // port: parseInt(process.env.DB_PORT),
  // username: process.env.USERNAME,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions); //4
export default dataSource;
