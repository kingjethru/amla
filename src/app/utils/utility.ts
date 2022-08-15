import { AbstractControl, FormGroup } from '@angular/forms';
import { formatNumber } from '@angular/common';
import * as _ from 'lodash';
import { Router } from '@angular/router';

export class Utility {

  // static updateValidator(input: AbstractControl, validator: any) {
  //   input.setValidators(validator);
  //   input.updateValueAndValidity();
  // }

  // static setNull(checked: boolean, value: any) {
  //   return !checked ? null : value;
  // }

  static isEmpty(value: any) {
    return value === null || value === '';
  }

  static isUndefined(value: any) {
    return value === undefined || value === null || value === '';
  }

  static goToHomepage() {
    window.location.href = '';
  }

  // static toastr(toastr: any, message: string, title: string, type: string) {
  //   var settings = {
  //     closeButton: true,
  //     positionClass: 'toast-top-full-width',
  //     timeOut: 30000,
  //     tapToDismiss: false,
  //     extendedTimeOut: 5000,
  //   };

  //   switch (type) {
  //     case 'S': {
  //       toastr.success(message, title, settings);
  //       break;
  //     }
  //     case 'W': {
  //       toastr.warning(message, title, settings);
  //       break;
  //     }
  //     case 'E': {
  //       toastr.error(message, title, settings);
  //       break;
  //     }
  //     default: {
  //       toastr.info(message, title, settings);
  //       break;
  //     }
  //   }
  // }

  //smooth scroll to preferred html element
  static scroll(id: string) {
    //buffer if id is hidden
    setTimeout(() => {
      var el = document.getElementById(id);
      if (!this.isUndefined(el)) {
        el?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 500);
  }

  //converts string value to integer
  static parseIntArray(arr: any[], param: string) {
    if (arr) {
      arr.forEach((a) => {
        a[param] = parseInt(a[param]);
      });
      return arr;
    }
    return [];
  }

  // static getPaymentDetailsTitle(name: string) {
  //   let title = '';

  //   switch (name) {
  //     case 'docStamp':
  //       title = 'Document Stamp';
  //       break;
  //     case 'eVat':
  //       title = 'E-VAT';
  //       break;
  //     case 'lgt':
  //       title = 'Local Government Tax';
  //       break;
  //     case 'fst':
  //       title = 'FST';
  //       break;
  //     case 'grossPremium':
  //       title = 'Gross Premium';
  //       break;
  //     case 'receipt':
  //       title = 'Receipt';
  //       break;
  //     default:
  //       title = 'Net Premium';
  //       break;
  //   }

  //   return title;
  // }

  // static addCommas(element: HTMLElement, formGroup: FormGroup) {
  //   const controlName = element.getAttribute('formControlName') || '';
  //   const input = formGroup.get(controlName);

  //   var value = input?.value.replace(/,/g, '');

  //   if (this.isNumber(value)) {
  //     var n = parseInt(value);
  //     input?.setValue(n > 0 ? formatNumber(n, 'en-US', '1.0-0') : '');
  //   } else {
  //     input?.setValue('');
  //   }
  // }

  // static isNumber(str: string): boolean {
  //   if (typeof str !== 'string') {
  //     return false;
  //   }

  //   if (str.trim() === '') {
  //     return false;
  //   }

  //   return !Number.isNaN(Number(str));
  // }

  // static convertToNumber(val: string) {
  //   if (!_.isEmpty(val)) {
  //     var value = val.replace(/,/g, '');
  //     if (this.isNumber(value)) {
  //       return parseInt(value);
  //     }
  //   }

  //   return 0;
  // }
}
