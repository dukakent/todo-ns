import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule { }
