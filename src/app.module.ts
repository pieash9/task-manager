import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistModule } from './artist/artist.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { typeOrmAsyncConfig } from 'db/data-source';
import { PlayListModule } from './playlists/playlists.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validate } from 'env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      isGlobal: true,
      load: [configuration],
      validate: validate,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    SongsModule,
    ArtistModule,
    UserModule,
    AuthModule,
    PlayListModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
