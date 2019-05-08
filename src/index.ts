'use strict';

import { HostListener } from '@angular/core';

export class ScannerService {
  private pressed = false;
  private chars = [];

  @HostListener('document:keypress', ['$event'])
  scanCard(e) {
    if (e.which >= 48 && e.which <= 57) {
      this.chars.push(String.fromCharCode(e.which));
    }

    if (this.pressed == false) {
      setTimeout(() => {
        if (this.chars.length >= 10) {
          const barcode = this.chars.join("");
          const event = new CustomEvent('custom-barcode-scanned', { detail: { barcode } });
          document.dispatchEvent(event);
        }
        this.chars = [];
        this.pressed = false;
      }, 250);
    }

    this.pressed = true;
  }
}
