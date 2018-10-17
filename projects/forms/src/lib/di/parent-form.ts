import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export const PARENT_FORM_GROUP = new InjectionToken<FormGroup>('PARENT_FORM_GROUP');
