export interface IInput {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  placeholder: string;
}
