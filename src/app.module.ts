import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StakeholdersModule } from './stakeholders/stakeholders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DocumentsModule } from './documents/documents.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      synchronize: true,
    }),
    StakeholdersModule,
    DocumentsModule,
    CollaboratorsModule,
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

