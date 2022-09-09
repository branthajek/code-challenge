import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorPickerComponent } from './color-picker.component';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a color input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const colorInput = compiled.querySelector('#colorPicker');
    fixture.detectChanges();
    expect(colorInput).toBeTruthy();
    expect(colorInput.getAttribute('type')).toEqual('color');
  });

  it('should have a text input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const textInput = compiled.querySelector('#textInput');
    fixture.detectChanges();
    expect(textInput).toBeTruthy();
    expect(textInput.getAttribute('type')).toEqual('text');
  });

  xit('should have matching text and color input values', async () => {
    let colorInput = fixture.debugElement.query(By.css('#colorPicker'));
    let textInput = fixture.debugElement.query(By.css('#textInput'));

    colorInput.nativeElement.value = '#aaaaaa';
    colorInput.nativeElement.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(colorInput.nativeElement.value).toBe('#aaaaaa');
      expect(textInput.nativeElement.value).toBe('#aaaaaa');
    });
  });

  it('should correctly render the passed @Input value', () => {
    component.label = 'test label';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText).toBe('test label');
  });
});
