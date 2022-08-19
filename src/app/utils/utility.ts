import * as _ from 'lodash';

export class Utility {
  static isEmpty(value: any) {
    return value === null || value === '';
  }

  static isUndefined(value: any) {
    return value === undefined || value === null || value === '';
  }

  static goToHomepage() {
    window.location.href = '';
  }

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
}
