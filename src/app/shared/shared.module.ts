import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialDesign } from 'src/utility/material';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialDesign
  ],
  exports : [
    ToolbarComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
