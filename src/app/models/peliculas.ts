import { ActorModel } from './actor';

export class PeliculaModel {
    public id: number;
    public title: string;
    public genre_ids: number[];
    public overview: string;
    public actores: ActorModel[];
    public poster_path: string;
    public backdrop_path: string;
    public vote_average: number;
    public release_date: Date;

}