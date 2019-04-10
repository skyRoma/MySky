import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Jump } from 'src/app/core/models/jump';

@Component({
  selector: 'app-jump-table',
  templateUrl: './jump-table.component.html',
  styleUrls: ['./jump-table.component.scss'],
})
export class JumpTableComponent implements OnInit {
  displayedColumns: string[] = [
    'index',
    'date',
    'exercise',
    'parachute',
    'aircrafType',
    'height',
    'freeFallTime',
    'result',
  ];

  columns = [
    { title: 'Номер', name: 'index' },
    { title: 'Дата', name: 'date' },
    { title: 'Упражнение', name: 'exercise' },
    { title: 'Парашют', name: 'parachute' },
    { title: 'Возудшное судно', name: 'aircrafType' },
    { title: 'Высота', name: 'height' },
    { title: 'Время своб. падения', name: 'freeFallTime' },
    { title: 'Результат', name: 'result' },
  ];

  options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  data = [
    {
      index: 1,
      date: new Date().toLocaleString('ru', this.options),
      exercise: 'Точность',
      parachute: 'Мальва',
      aircrafType: 'Ан-2',
      height: 1200,
      freeFallTime: 15,
      result: 'H',
    },
  ];

  dataSource = new MatTableDataSource<Jump>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
