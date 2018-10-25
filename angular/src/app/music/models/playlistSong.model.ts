import { Song } from './song.model';
import { Playlist } from './playlist.model';

export interface PlaylistSong {
    id: number;
    songId: number;
    playlstId: number;
    song?: Song;
    playlist?: Playlist;


}
