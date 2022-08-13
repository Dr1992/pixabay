export interface IPixabay {
  id: number;
  previewURL: string;
  largeImageURL: string;
  tags: string;
  user: number;
}

export interface IPixabayResponse {
  hits: IPixabay[];
}
