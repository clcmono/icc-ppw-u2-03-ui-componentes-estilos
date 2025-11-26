import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSwitcher } from "../../../shared/components/theme-switcher/theme-switcher";

@Component({
  selector: 'app-drawer-navbar',
  imports: [RouterLink, ThemeSwitcher,RouterLinkActive],
  templateUrl: './drawer-navbar.html',
  styleUrl: './drawer-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerNavbar { }
