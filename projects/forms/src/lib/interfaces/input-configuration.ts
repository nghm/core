export interface InputConfiguration {
  name: string;
  value: any;
  type: string;

  required?: boolean;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  email?: boolean;
  pattern?: string;

  disabled?: boolean;

  component?: { pack: string, name: string };
}
