//sen bir componentsin diyebilmemiz için satır 5 te, bunu import etmeliyiz
import { Component } from '@angular/core';

//typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Engin Karataş';

}
