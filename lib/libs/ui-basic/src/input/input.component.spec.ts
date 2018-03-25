import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { PipesModule } from '../../../pipes/pipes.module';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, PipesModule],
      declarations: [ InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    // console.log('-----------------------------------');
    console.log(component);
//     this.form = this.fb.group({
//   email: ['', [
//     Validators.required,
//     Validators.pattern("[^ @]*@[^ @]*")]],
//   password: ['', [
//     Validators.required,
//     Validators.minLength(8)]],
// });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
