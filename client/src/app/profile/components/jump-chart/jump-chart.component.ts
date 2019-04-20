import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-jump-chart',
  templateUrl: './jump-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumpChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {
      data: [8, 1, 14, 2, 16, 5, 10],
      label: 'Отклонение от цели',
    },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];

  lineChartLegend = true;

  lineChartType = 'line';

  constructor() {}

  ngOnInit() {}
}
