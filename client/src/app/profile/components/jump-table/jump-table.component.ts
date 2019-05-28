import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Jump } from 'src/app/core/models';

import { COLUMNS, DISPLAYED_COLUMNS } from './jump-table-config';

@Component({
  selector: 'app-jump-table',
  templateUrl: './jump-table.component.html',
  styleUrls: ['./jump-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumpTableComponent implements OnChanges, AfterViewInit {
  @Input()
  jumps: Jump[];

  @Output() edit: EventEmitter<Jump> = new EventEmitter();

  displayedColumns = DISPLAYED_COLUMNS;

  columns = COLUMNS;

  dataSource = new MatTableDataSource<Jump>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.jumps.firstChange) {
      this.onJumpsChange();
    }
  }

  ngAfterViewInit(): void {
    this.onJumpsChange();
  }

  isDateCell(columnName: string): boolean {
    return columnName === 'date';
  }

  getCellValue(row: Jump, columnName: string): any {
    return row[columnName].id ? row[columnName].name : row[columnName];
  }

  editJump(row: Jump): void {
    this.edit.emit(row);
  }

  private onJumpsChange(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.jumps;
  }
}
