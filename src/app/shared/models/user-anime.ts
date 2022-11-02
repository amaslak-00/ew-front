import { IAnime } from "./anime";
import { IUser } from "./user";

export interface IUserAnime {
    id: number;
    isWatched: boolean;
    user: IUser[],
    anime: IAnime[],
    comment: string,
   
}
