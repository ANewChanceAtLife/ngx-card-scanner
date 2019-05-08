# Installation

```node
npm install ngx-card-scanner
```

# Usage

Once the package has been installed you should extend the class in your ```app.component.ts```.

```typescript
export class AppComponent extends ScannerService {
}
```

This will then listen for all keypress events across your app that you can then use whereever you need to inject the value. The service will emit a ```CustomEvent``` with the name ```custom-barcode-scanned``` and will pass a detail object with the ```barcode``` key of the value of the scanned card.

# Example

See below for an example implementation.

```typescript
export class AppComponent extends ScannerService {
  private myBarcodeField = '';

  constructor() {
    super();

    document.addEventListener('custom-barcode-scanned', (evt) => {
      this.myBarcodeField = evt.detail.barcode;
    });
  }
}
```
