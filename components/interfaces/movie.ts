import {Person} from './persons' 

export interface Movies {
    count: number;
    rows: Movie[];
  }
export interface Movie{
    person: Person[];
    ratingKinopoisk: number;
    nameRu: string;
    nameEn: string;
    year: number;
    movieLength: string;
    ratingAgeLimits: string;
    genres: string[];
    countries: string[];
    type: string;
    description: string;
    id:number;
    posterUrlPreview:string;
}