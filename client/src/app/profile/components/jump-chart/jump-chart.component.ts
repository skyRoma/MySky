import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Jump } from 'src/app/core/models';

@Component({
  selector: 'app-jump-chart',
  templateUrl: './jump-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumpChartComponent implements OnChanges {
  @Input()
  jumps: Jump[];

  lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Отклонение от цели',
    },
  ];

  lineChartLabels: Label[] = [];

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.jumps) {
      this.lineChartData[0].data = this.jumps.map(jump => jump.result);
      this.lineChartLabels = this.jumps.map((jump, i) => String(i));
    }
  }
}
