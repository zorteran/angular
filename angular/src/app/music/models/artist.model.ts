import { Coords } from 'src/app/shared/map/map.component';

export interface Artist {
    id: number;
    name: string;
    img: string;
    location: Coords;
}
