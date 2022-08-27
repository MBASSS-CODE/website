import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkTheme: boolean = false;

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
  }

  darkTheme(event) {
    if (event.checked) {
      this.isDarkTheme = true;
      localStorage.setItem('theme', "Dark");
    } else {
      this.isDarkTheme = false;
      localStorage.setItem('theme', "Light");
    }
  }
}
