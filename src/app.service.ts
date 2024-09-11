import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigServicet';

@Injectable()
export class AppService {
  constructor(
    private devConfig: DevConfigService,
    @Inject('CONFIG') private config: { port: string },
  ) {}
  getHello(): string {
    return 'Hello World!' + this.devConfig.getDBHOST() + this.config.port;
  }
}
