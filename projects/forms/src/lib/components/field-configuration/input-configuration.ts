import { ComponentFactory } from '@angular/core';

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
}

export interface FieldConfiguration {
  name: string;
  inputFactory: ComponentFactory<any>;
  configuration: InputConfiguration;
}
