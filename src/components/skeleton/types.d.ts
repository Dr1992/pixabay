export interface ISkeleton {
  dimensions: [string, string];
  margin?: [string, string];
}

export interface IViewProps {
  animation?: any;
  marginHorizontal: string | number;
  marginVertical?: string | number;
  height?: string | number;
  width?: string | number;
}
