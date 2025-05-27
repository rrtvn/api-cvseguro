import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        console.log(configService.get('DB_HOST'));
        console.log(configService.get('DB_NAME'));
        
        return {
            type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        // entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: true
     } // SE CAMBIA POR FALSE EN PRODUCCION
    },
}