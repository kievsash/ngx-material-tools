import {Directive, ElementRef, HostListener, Input, PipeTransform} from '@angular/core';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material';
import {numberWithCommas} from './helpers';

@Directive({
  selector: 'input[matInputCommified]',
  providers: [
    {provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MatInputCommifiedDirective}
  ]
})
export class MatInputCommifiedDirective {
  // tslint:disable-next-line:variable-name
  private _value: string | null;
  @Input() formatPipe: PipeTransform;
  @Input() formatPipeArgs: any[] = [];

  constructor(private elementRef: ElementRef<HTMLInputElement>, public ngControl: NgControl) {
    console.log('created directive');
    ngControl.valueAccessor = this; // Remove NG_VALUE_ACCESSOR from providers to remove cyclic dependency with NgControl
  }


  get value(): string | null {
    return this._value;
  }

  @Input('value')
  set value(value: string | null) {
    this._value = value;
    this.formatValue(value);
  }

  private formatValue(value: string | null): void {
    if (value !== null) {
      if (this.formatPipe) {
        this.elementRef.nativeElement.value = this.formatPipe.transform(value, ...this.formatPipeArgs);
      } else {
        this.elementRef.nativeElement.value = numberWithCommas(value);
      }
    } else {
      this.elementRef.nativeElement.value = '';
    }
    if (this.ngControl) {
      this.ngControl.control?.markAsTouched(); // Touch input to allow MatFormField to show errors properly
    }
  }

  private unFormatValue(): void {
    const value = this.elementRef.nativeElement.value;
    this._value = value.replace(/[^\d.-]/g, '');
    if (value) {
      this.elementRef.nativeElement.value = this._value;
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value): void {
    this._value = value.replace(/[^\d.-]/g, '');
    this._onChange(this._value);
  }

  @HostListener('blur')
  _onBlur(): void {
    this.formatValue(this._value);
  }

  @HostListener('focus')
  onFocus(): void {
    this.unFormatValue();
  }

  _onChange(value: any): void {
  }

  writeValue(value: any): void {
    this._value = value;
    this.formatValue(this._value);
    // this._onChange(this._value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(): void {
  }


}
