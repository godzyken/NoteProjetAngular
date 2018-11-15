import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'NoteProjetAngular';

  public popoverTitle: string = 'Popover title';
  public popoverMessage: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
}
