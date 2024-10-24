import { IsString } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  name: string;
}

export class AddSongToPlaylistDto {
  @IsString()
  songId: string;
}