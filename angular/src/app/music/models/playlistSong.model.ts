import { Song } from './song.model';

export interface PlaylistSong {
    id: number;
    songId: number;
    playlstId: number;
    song: Song;


}
