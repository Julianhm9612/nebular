/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';

import { NbAppComponent } from './app.component';
import { NbLayoutDirectionToggleComponent } from './layout-direction-toggle/layout-direction-toggle.component';
import { NbDynamicToAddComponent } from '../playground/shared/dynamic.component';
import { NbPlaygroundSharedModule } from '../playground/shared/shared.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: '../playground/playground.module#NbPlaygroundModule',
      },
    ], { useHash: true }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbPlaygroundSharedModule,
  ],
  declarations: [
    NbAppComponent,
    NbLayoutDirectionToggleComponent,
  ],
  entryComponents: [
    NbDynamicToAddComponent,
  ],
  bootstrap: [NbAppComponent],
})
export class NbAppModule {
}
