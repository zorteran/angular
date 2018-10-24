export interface Song {
    id: number;
    title: string;
    year: string;
    artistId: number;
    webUrl: string;
    generes: string[];
    favorite?: boolean;
}
