import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chartjs-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {


  @Input()
  chartId: string;

  @Input()
  chartTitle: string;

  @Input()
  chartType: string;

  @Input()
  chartLabels: string[] = [];

  @Input()
  chartData: number[] = [];

  chart: any;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.generateChart();
  }

  generateChart() {
    // tslint:disable-next-line:no-debugger
    debugger;

    const charCtx = <HTMLCanvasElement>document.getElementById(this.chartId);

    this.chart = new Chart(charCtx, {
      animating: true,
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Bar Chart',
          data: this.chartData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(55, 112, 434, 0.4)',
          ],
        }]
      },
      options: {
        defaultColor: 'rgba(255, 159, 64, 0.2)',
        title: {
          display: true,
          text: this.chartTitle
        },
        legend: {
          display: true,
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        },
        animation: {
          easing: 'easeOutBounce'
        }
      }
    });

    setTimeout(() => {
      this.chart.update();
    }, 500);
  }

}
