import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Song } from './songs.schema';

@Schema()
export class Playlist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Song' }] })
  songs: Types.ObjectId[]; 
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
