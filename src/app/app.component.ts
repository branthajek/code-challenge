import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from "@angular/forms";

const defaultFgColor = "#DD0032";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @HostBinding("style.--bg-color")
  public bgColor: string = "#2574A9";

  @HostBinding("style.--fg-color")
  public fgColor: string = defaultFgColor;

  public form: FormGroup;
  public readonly title = 'cn-interview';

  constructor(
    private cd: ChangeDetectorRef,
    fb: FormBuilder,
  ) {
    this.form = fb.group({
      fgColor: fb.control("#DD0032"),
    });
  }

  public ngOnInit() {
    this.form.controls["fgColor"].valueChanges.subscribe((fgColor) => {
      this.fgColor = fgColor || defaultFgColor;
      this.cd.markForCheck();
    })
  }

}
