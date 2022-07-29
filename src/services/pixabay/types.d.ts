export interface IPixabay {
  id: number;
  previewURL: string;
  largeImageURL: string;
  tags: string;
  imageWidth: number;
  imageHeight: number;
  user: number;
}

export interface IPixabayResponse {
  hits: IPixabay[];
}
