export interface IPixabay {
  id: number;
  previewURL: string;
  largeImageURL: string;
  tags: string;
  imageWidth: number;
  imageHeight: number;
  user: number;
  empty?: boolean;
}

export interface IPixabayResponse {
  hits: IPixabay[];
}
