import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {
  @Output() sectionClicked = new EventEmitter<string>();
  sectionSelected: string = null;

  onSectionClicked(section: string): void {
    this.sectionClicked.emit(section);
    this.sectionSelected = section;
  }
}
