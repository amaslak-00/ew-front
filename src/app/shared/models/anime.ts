import { IStudio } from './studio';
export interface IAnime {
    id: number;
    title: string;
    studio: IStudio;
    genre: string;
    numberOfSeasons: number;
    dateOfPremiere: string;
    isOngoing: boolean;
  }
