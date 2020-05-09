import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  myTitle = 'ex10c-angular-bindings';
  myImgSrc = 'https://picsum.photos/123';
  myClickCount = 0;

  name4twoWayBindingUsingNgModel: string;

  name4twoWayBindingUsingSplitNgModelAndNgModelChange: string;

  private _name4twoWayBindingUsingPropertySetterGetter: string;
  get name4twoWayBindingUsingPropertySetterGetter(): string {
    return this._name4twoWayBindingUsingPropertySetterGetter;
  }
  set name4twoWayBindingUsingPropertySetterGetter(value: string) {
    this._name4twoWayBindingUsingPropertySetterGetter = value;
  }

  name4twoWayBindingUsingNgModel2: string = 'NOTE ilker this line will NOT initialize it';
  @ViewChild('templateRef2input', {static: false}) elementRef2input: ElementRef;
  /**
   * AfterViewInit is a lifecycle hook that is called after Angular has fully initialized a component's view. 
   * It's ngAfterViewInit() method is to handle any additional initialization tasks.
   * NOTE ilker, with {static: false} value for 2nd input arg to @ViewChild introduced with Angular 8, ElementRef will be initialized only when below method is called, not at ngOnInit.
   *      With {static: true}, then elementRef2input will be already initialized when you are in ngOnInit method.
   *      Before Angular 7, the hard coded value of static was always false
   */
  ngAfterViewInit() {
    this.name4twoWayBindingUsingNgModel2 = 'NOTE will have focus'; // NOTE ilker 
    this.elementRef2input.nativeElement.focus();
  }

  ngOnInit() {
  }

  incrementMyClickCount(): void {
    this.myClickCount++;
  }

  setName4twoWayBindingUsingSplitNgModelAndNgModelChange(value: string): void {
    this.name4twoWayBindingUsingSplitNgModelAndNgModelChange = value;
  }


}
