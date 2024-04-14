import { Component, Input, inject } from '@angular/core';
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
  folderIcon,
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
import { ThemeService } from './services/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { SeriesLabelsContentArgs } from "@progress/kendo-angular-charts";
import { ChartsModule } from "@progress/kendo-angular-charts";

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
    ChartsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    DialogsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'AngularThemes';
  protected theme: string = '';
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

  public folderSVG: SVGIcon = folderIcon;
  public onButtonClick(): void {
    console.log("click");
  }

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

  constructor(private intl: IntlService) {
    this.SetColorTheme();
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: SeriesLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`;
  }

  protected SetColorTheme(){
    this.theme = this.colorThemeService.getTheme();
  }

  public value = ['Basketball', 'Cricket'];
  public complexValue = { text: 'Decor', id: 5 };
  public complexArrayValue = [{ text: 'Sofas', id: 3 }];
  protected colorThemeService = inject(ThemeService);

  public pieData = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  
  ChangeTheme(theme: string) {
    this.colorThemeService.setTheme(theme);
    this.SetColorTheme();
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
