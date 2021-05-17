import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-home vertical-offset-level-1',
  },
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
