import { Component } from '@angular/core';
import { DrawerNavbar } from "./components/drawer-navbar/drawer-navbar";
import { Code } from "./components/code/code";
import { Table } from "./components/table/table";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { Avatar } from "./components/avatar/avatar";
import { MockupPhone } from "./components/mockup-phone/mockup-phone";

@Component({
  selector: 'app-daisyui-page',
  imports: [DrawerNavbar, Code, Table, Card, Footer, Avatar, MockupPhone],
  templateUrl: './daisyui-page.html',
  styleUrl: './daisyui-page.css',
})
export class DaisyuiPage {

}
