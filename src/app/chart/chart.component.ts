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

  ngOnInit() { }

  ngAfterViewInit() {
    this.generateChart();
  }

  generateChart() {

    this.validateCharId();

    const charCtx = <HTMLCanvasElement>document.getElementById(this.chartId);

    this.chart = new Chart(charCtx, {
      animating: true,
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Bar Chart',
          data: this.chartData,
          backgroundColor: this.generateRandomColors()
          ,
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
            // fontColor: 'rgb(255, 99, 132)'
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


  validateCharId() {
    if (!this.chartId)
      throw Error('You chart does not have a chartId property, please insert the chartId to identify the canvas')
  }

  generateRandomColors() {
    const colors: string[] = [];
    for (let index = 0; index < this.chartData.length; index++) {
      let randomColor1 = Math.floor((Math.random() * 255) + 1);
      let randomColor2 = Math.floor((Math.random() * 255) + 1);
      let randomColor3 = Math.floor((Math.random() * 255) + 1);
      let randomColor4 = Math.floor((Math.random() * 255) + 1);
      let color = `rgb(${randomColor1.toString()},${randomColor2.toString()},${randomColor3.toString()})`;
      colors.push(color);
      color = null;
    }
    return colors;
  }

}
