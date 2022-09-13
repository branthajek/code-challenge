import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ColorPickerComponent,
    multi: true
  }],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements OnChanges, ControlValueAccessor {

  @Input() label!: string;
  hexColor = '';

  onChange!: (value: string|null) => void;
  onTouch!: (value: any) => void;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  writeValue(value: string) {
    this.hexColor = value;
  }
  registerOnChange(fn: any) { 
    this.onChange = fn;  
  }
  // not in use, but interface requires it
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['label'].currentValue != changes['label'].previousValue) {
      this.changeDetector.detectChanges();
    }
  }

  onChangeColor(event: Event) {
    const hexString = (<HTMLInputElement>event.target).value;
    const regex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

    if (hexString.match(regex)) {
      this.onChange((<HTMLInputElement>event.target).value)
    } else {
      this.onChange(null)
    }
  }
}
