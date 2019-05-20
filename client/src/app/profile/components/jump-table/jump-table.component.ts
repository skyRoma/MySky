import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Jump } from 'src/app/core/models';

import { COLUMNS, DISPLAYED_COLUMNS, MOCK_DATA } from './jump-table-config';

@Component({
  selector: 'app-jump-table',
  templateUrl: './jump-table.component.html',
  styleUrls: ['./jump-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumpTableComponent implements OnInit {
  @Output() edit: EventEmitter<Jump> = new EventEmitter();

  displayedColumns = DISPLAYED_COLUMNS;

  columns = COLUMNS;

  data = MOCK_DATA;

  dataSource = new MatTableDataSource<Jump>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  editJump(row: Jump): void {
    this.edit.emit(row);
  }
}
