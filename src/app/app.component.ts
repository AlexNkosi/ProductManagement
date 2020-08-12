import { Component } from '@angular/core';

import {names} from './name';

import { from } from 'rxjs';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';

  name = names;

  


  show () {
    window.alert(this.name);
  }

}
