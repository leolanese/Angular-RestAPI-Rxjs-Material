import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    ScrollingModule
  ]
})
export class MaterialModule {}
