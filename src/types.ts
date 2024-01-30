export interface IRace {
  id: string;
  name: string;
  description: string;
  image: string;
  genres: Array<IGenre>;
}

export interface IGenre {
  id: string;
  name: string;
  description: string;
}

export interface ICharacter {
  characterName: string;
  race: IRace;
  genre: IGenre;
}