import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    const compiled = fixture.debugElement.nativeElement;
    let colorInput = compiled.querySelector('#colorPicker');
    let textInput = compiled.querySelector('#textInput');
    
    textInput.value = '#aaaaaa'
    
    fixture.detectChanges();

    expect(colorInput.value).toBe('#aaaaaa');
    expect(component.hexColor).toBe('#aaaaaa');
  });

  it('should correctly render the passed @Input value', () => {
    component.label = 'test label';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText).toBe('test label');
  });
});
