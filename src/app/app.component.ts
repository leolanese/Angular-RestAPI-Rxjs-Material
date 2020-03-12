import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.componen.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
