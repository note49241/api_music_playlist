import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Playlist } from '../schema/playlist.schema';
import { CreatePlaylistDto, AddSongToPlaylistDto } from '../dto/playlist.dto';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectModel(Playlist.name) private playlistModel: Model<Playlist>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
    const newPlaylist = new this.playlistModel(createPlaylistDto);
    return newPlaylist.save();
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlistModel.find().populate('songs').exec();
  }

  async addSong(
    playlistId: string,
    addSongDto: AddSongToPlaylistDto,
  ): Promise<Playlist> {
    const playlist = await this.playlistModel.findById(playlistId);
    if (!playlist) throw new NotFoundException('Playlist not found');

    const songId = new Types.ObjectId(addSongDto.songId); // Ensure it's an ObjectId
    playlist.songs.push(songId); // Add the song ID reference
    return playlist.save();
  }

  async removeSong(playlistId: string, songId: string): Promise<Playlist> {
    const playlist = await this.playlistModel.findById(playlistId);
    if (!playlist) throw new NotFoundException('Playlist not found');

    playlist.songs = playlist.songs.filter((id) => id.toString() !== songId);
    return playlist.save();
  }
}
