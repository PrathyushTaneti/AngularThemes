import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  DrawerItem,
  DrawerSelectEvent,
  LayoutModule,
} from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {
  SVGIcon,
  bellIcon,
  calendarIcon,
  envelopeLinkIcon,
  inboxIcon,
  menuIcon,
  starOutlineIcon,
} from '@progress/kendo-svg-icons';
import { GridModule } from '@progress/kendo-angular-grid';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutModule,
    ButtonsModule,
    GridModule,
    LabelModule,
    InputsModule,
    DropDownsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    DialogsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'AngularThemes';
  protected theme: string = 'bootstrap';
  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
    {
      ProductID: 2,
      ProductName: 'Chang',
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
    {
      ProductID: 3,
      ProductName: 'Aniseed Syrup',
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: 'Condiments',
      },
    },
  ];
  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
  ];

  public treeItems: any[] = [
    {
      text: 'Furniture',
      id: 1,
      items: [
        { text: 'Tables & Chairs', id: 2 },
        { text: 'Sofas', id: 3 },
        { text: 'Occasional Furniture', id: 4 },
      ],
    },
    {
      text: 'Decor',
      id: 5,
      items: [
        { text: 'Bed Linen', id: 6 },
        { text: 'Carpets', id: 7 },
      ],
    },
  ];

  public value = ['Basketball', 'Cricket'];
  public complexValue = { text: 'Decor', id: 5 };
  public complexArrayValue = [{ text: 'Sofas', id: 3 }];

  ChangeTheme(theme: string) {
    this.theme = theme;
  }
  @Input() selectedItem!: string;

  public selected = 'Inbox';
  public menuSvg: SVGIcon = menuIcon;

  public opened = false;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public items: Array<DrawerItem> = [
    { text: 'Inbox', svgIcon: inboxIcon, selected: true },
    { separator: true },
    { text: 'Notifications', svgIcon: bellIcon },
    { text: 'Calendar', svgIcon: calendarIcon },
    { separator: true },
    { text: 'Attachments', svgIcon: envelopeLinkIcon },
    { text: 'Favourites', svgIcon: starOutlineIcon },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

  protected ShowThemeChangePopup() {
    this.open();
  }
}
