import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnly } from '../AppDirectives/numberOnly.directive';

@NgModule({
   imports: [
   CommonModule,
  ],
  declarations: [NumbersOnly],
  exports: [
    NumbersOnly
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}