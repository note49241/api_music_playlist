import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { Song, SongSchema } from '../schema/songs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
