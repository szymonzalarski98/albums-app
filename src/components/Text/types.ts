export enum TextSize {
  Small = 12,
  Medium = 20,
  Large = 28,
}

export interface IText {
  size?: TextSize;
  color?: string;
}
