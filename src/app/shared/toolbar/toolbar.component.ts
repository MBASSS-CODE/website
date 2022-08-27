import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toggleTheme: boolean;
  darkModeIcon: string;

  @Output() public darkMode = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('theme') === "Dark") {
      this.toggleTheme = true;
      this.darkModeIcon = 'dark_mode';
    } else {
      this.toggleTheme = false;
      this.darkModeIcon = 'light_mode';
    }
  }

  darkModeSwitch (event) {
    this.darkMode.emit(event);
    if (event.checked) {
      this.darkModeIcon = 'dark_mode';
    } else {
      this.darkModeIcon = 'light_mode';
    }
  }
}
