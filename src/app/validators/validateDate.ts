import { AbstractControl } from '@angular/forms';

const moment = require('moment');

export function validateDate(control: AbstractControl): {[key: string]: any} | null {
  const dateRegExp = new RegExp(/\d{4}-\d{2}-\d{2}.*/);
  const valid = dateRegExp.test(moment(control.value).format());
  return valid ? null : { 'invalidDate' : true };
}
