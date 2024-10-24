import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/song.module';
import { PlaylistsModule } from './playlist/playlist.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/music-db'),
    SongsModule,
    PlaylistsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
