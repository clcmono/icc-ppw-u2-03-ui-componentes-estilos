import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'phone',
  imports: [],
  templateUrl: './mockup-phone.html',
  styleUrl: './mockup-phone.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MockupPhone { }
