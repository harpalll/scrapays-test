import { Injectable } from '@nestjs/common';

interface Response {
  name: string;
}

@Injectable()
export class AppService {
  getHello(): Response {
    return { name: 'hello' };
  }
}
