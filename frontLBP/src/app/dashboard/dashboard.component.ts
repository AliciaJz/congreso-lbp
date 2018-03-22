import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('AsistentesChart') chart: ElementRef;

  constructor() { }

  chartConfig: any = {
    scaleSteps: 5,
    type: 'bar',
    data: {
      labels: ["Oro", "Plata"],
      datasets: [{
        label: ['Cantidad de material (KG)'],
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            stepSize: 5
          }
        }]
      }
    }
  };

  ngAfterViewInit() {
    new Chart( this.chart.nativeElement, this.chartConfig); 
  }
  ngOnInit() {
  }
}