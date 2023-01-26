import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['kind-hound-13556-us1-kafka.upstash.io:9092'],

        sasl: {
          mechanism: 'scram-sha-256',

          username:
            'a2luZC1ob3VuZC0xMzU1NiTfYFxWBI3VUSZogeAfwtFO45ajz3AMwwewemUx4w',

          password:
            'lQJWr0cr0SqGvjX9ozQhqcBsDhT-vS9jbdGgCIZxs6YYOWtZXYWUeweweqlcZEFR-9xcWl-p00A==',
        },

        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
