import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.constants';
import { JwtStrategy } from './jwt.strategy';
import { ArtistModule } from 'src/artist/artist.module';
import { ApiKeyStrategy } from './api-key-strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('secret'),
        signOptions: {
          expiresIn: '1d',
        },
      }),
      inject: [ConfigService],
    }),
    ArtistModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ApiKeyStrategy],
  exports: [AuthService],
})
export class AuthModule {}
