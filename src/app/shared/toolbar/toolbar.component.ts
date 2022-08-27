import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { WebsiteTheme } from 'src/utility/websiteTheme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toggleTheme: boolean;
  darkModeIcon: string;

  @Output() public darkMode = new EventEmitter;

  constructor(
    public websiteTheme : WebsiteTheme
  ) { }

  ngOnInit(): void {
    this.websiteTheme.themeOnInitCheck();
  }

}
