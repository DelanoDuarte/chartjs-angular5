import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'chartjs-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {


  @Input()
  chartId: string;

  @Input()
  chartTitle: string;

  @Input()
  barChartTitle: string;

  @Input()
  chartType: string;

  @Input()
  chartLabels: string[] = [];

  @Input()
  chartData: number[] = [];

  @Output()
  onHover: EventEmitter<any> = new EventEmitter();

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  chart: any;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.generateChart();
  }

  generateChart() {

    this.validateChart();

    const charCtx = <HTMLCanvasElement>document.getElementById(this.chartId);

    this.chart = new Chart(charCtx, {
      animating: true,
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: this.barChartTitle === undefined ? '' : this.barChartTitle,
          data: this.chartData,
          backgroundColor: this.generateRandomColors()
          ,
        }]
      },
      options: {
        defaultColor: 'rgba(255, 159, 64, 0.2)',
        title: {
          fontSize: 22,
          display: true,
          text: this.chartTitle
        },
        tooltip: {
          enabled: true
        },
        legend: {
          display: true,
          labels: {
            // fontColor: 'rgb(255, 99, 132)'
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        },

        onHover: (event) => {
          this.onHover.emit(event);
        },

        onClick: (event) => {
          this.onClick.emit(event.target)
          console.log(event)
        }

      }
    });

    setTimeout(() => {
      this.chart.update();
    }, 1000);
  }


  validateChart() {

    if (!this.chartTitle)
      console.warn('Your chart does not have a title, use chartTitle input to insert one')

    if (!this.chartId)
      throw Error('Your chart does not have a chartId property, please insert the chartId to identify the canvas')

    if (this.chartData.length <= 0)
      throw Error('Your chart does not have the chatDate property, please insert the chartData to load the chart')

    if (this.chartLabels.length <= 0)
      throw Error('Your chart does not have the chartLabels property, please insert the chartLabels to load the chart')
  }

  generateRandomColors() {
    const colors: string[] = [];
    for (let index = 0; index < this.chartData.length; index++) {
      let randomColor1 = Math.floor((Math.random() * 255) + 1);
      let randomColor2 = Math.floor((Math.random() * 255) + 1);
      let randomColor3 = Math.floor((Math.random() * 255) + 1);
      let randomColor4 = Math.random() * (1 - 0.1) + 0.1;
      let color = `rgba(${randomColor1.toString()},${randomColor2.toString()},${randomColor3.toString()},${randomColor4.toString()})`;
      colors.push(color);
      color = null;
    }
    return colors;
  }

}
