import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ToastService } from './toast.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastMessageComponent],
  exports: [ToastMessageComponent]
})
export class ToastModule {

  public static forRoot(config: any): ModuleWithProviders {

    return {

      ngModule: ToastModule,
      providers: [
        ToastService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
