import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Jump } from 'src/app/core/models/jump';
import { DISPLAYED_COLUMNS, COLUMNS } from './config/columns';

@Component({
  selector: 'app-jump-table',
  templateUrl: './jump-table.component.html',
  styleUrls: ['./jump-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumpTableComponent implements OnInit {
  displayedColumns = DISPLAYED_COLUMNS;

  columns = COLUMNS;

  options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  data = new Array(40).fill({
    index: 1,
    date: new Date().toLocaleString('ru', this.options),
    exercise: 'Точность',
    parachute: 'Мальва',
    aircrafType: 'Ан-2',
    height: 1200,
    freeFallTime: 15,
    result: 'H',
  });

  dataSource = new MatTableDataSource<Jump>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
