import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedSection: string = null;
  onSectionClicked(section: string): void {
    this.selectedSection = section;
  }
}
