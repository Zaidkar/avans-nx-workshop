import { Module } from '@nestjs/common';
import { BackendFeaturesMealModule } from '../../../../libs/backend/features/src/lib/meal.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendFeaturesMealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
