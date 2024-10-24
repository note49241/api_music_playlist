import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaylistsService } from './playlist.service';
import { PlaylistsController } from './playlist.controller';
import { Playlist, PlaylistSchema } from '../schema/playlist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Playlist.name, schema: PlaylistSchema },
    ]),
  ],
  controllers: [PlaylistsController],
  providers: [PlaylistsService],
})
export class PlaylistsModule {}
