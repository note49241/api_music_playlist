import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  async getAllSongs() {
    return this.songsService.findAll();
  }

  @Get('search')
  async searchSongs(@Query('q') query: string) {
    return this.songsService.search(query);
  }

  @Post('/add_song')
  async addSong(@Body() body: string) {
    return this.songsService.addSong(body);
  }
}
