import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { PlaylistsService } from './playlist.service';
import { CreatePlaylistDto, AddSongToPlaylistDto } from '../dto/playlist.dto';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  async createPlaylist(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(createPlaylistDto);
  }

  @Get()
  async getAllPlaylists() {
    return this.playlistsService.findAll();
  }

  @Patch(':id/add-song')
  async addSongToPlaylist(
    @Param('id') playlistId: string,
    @Body() addSongDto: AddSongToPlaylistDto,
  ) {
    return this.playlistsService.addSong(playlistId, addSongDto);
  }

  @Patch(':id/remove-song/:songId')
  async removeSongFromPlaylist(
    @Param('id') playlistId: string,
    @Param('songId') songId: string,
  ) {
    return this.playlistsService.removeSong(playlistId, songId);
  }
}
