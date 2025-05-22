import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Nvrrt3993',
      database: 'cvseguro_db',
      autoLoadEntities: true,
      synchronize: true, //SOLO PARA DESARROLLO
    }),
  ],
})
export class AppModule {}
