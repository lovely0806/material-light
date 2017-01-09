//todo: en vez de renderer usar @HostBinding(class.classname) para poner clases en el host de una directiva

import {Component, ViewChild, ElementRef, Input, ViewEncapsulation, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import MdlToggle from './mdl_toggle';

@Component({
selector: 'ml-toggle',
styleUrls: ['./ml_toggle.css'],
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlToggle), multi: true}],
template: `

<label [attr.for]="id+'mdl'" class="mdl-icon-toggle" [ngClass]="{'is-checked': isChecked()}" #label>
  <input type="checkbox"  class="mdl-icon-toggle__input" 
         [attr.id]="id+'mdl'"
         [(ngModel)]="model" 
         [disabled]="disabled">
  <span class="mdl-icon-toggle__label"><ng-content></ng-content></span>
</label>


`//template
})
export class MlToggle implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @Input() id: string;
  @Input() disabled: string;
  
  mdlToggle: MdlToggle;

  // _model = undefined => unchecked
  // _model = null => unchecked
  // _model = true => checked
  // _model = false => unckeched
  // _model = (any value) => checked
  private _model: any;
  private onTouch = () => {};
  private onChange = (_: any) => {};

  ngOnInit() {
    this.mdlToggle = new MdlToggle(this.label.nativeElement);
    if(this.disabled && (this.disabled.toLowerCase() === 'true'))
      this.mdlToggle.disable();
  }
  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }
  get model() { return this._model }
  writeValue(value: any): void { this._model = value }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
  isChecked(){ return this._model == true }
}