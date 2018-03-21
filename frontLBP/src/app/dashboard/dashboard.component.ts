import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

// var chartData = {
//   labels: ["clase", "clase", "clase", "clase", "clase", "clase"],
//       datasets: [{
//         label: "Clases",
//         backgroundColor: ["#8e5ea2","#3cba9f","#efd86a","#c45850", "#3e95cd", "#ff89cb"],
//         data: [24,52,73,78,43,10]
//       }]
  
//   };
//   var ctx = document.getElementById("myChart");
//   var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: chartData,
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//       document.querySelector('select[name="chart-type"]').onchange= changeEventHandler;

//   }, false);

//   function changeEventHandler(event) {
//       myChart.destroy();
//       myChart = new Chart(ctx, {
//         type: this.value,
//         data: chartData
//       });
//   }
