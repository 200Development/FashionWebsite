import { Component, OnInit } from '@angular/core';
import { MetricService } from '../metrics.service';
import { ISalesGraphModel } from './sales-graph-model';


@Component({
  selector: 'sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.less']
})
export class SalesGraphComponent implements OnInit {

  constructor(private metricService: MetricService) { }

  //salesGraphModel: ISalesGraphModel;
  errorMessage: string;
  title: string;
  type: string;
  data: any;
  columnNames: string[];
  options: any;
  width: number;
  height: number;


  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.metricService.getSales().subscribe((data: ISalesGraphModel) => {
      this.BuildQuarterlySalesGraph(data);
    });
  }

  BuildQuarterlySalesGraph(data: ISalesGraphModel){
    var chartData = [];
    var chartColumnNames = [];
    var sales = data.data;
    var columnNames = data.columnNames;
    var qtr1 = sales["1st Quarter"];
    var qtr2 = sales["2nd Quarter"];
    var qtr3 = sales["3rd Quarter"];
    var qtr4 = sales["4th Quarter"];
    
    columnNames.forEach((name: string) => {
      chartColumnNames.push(name.toString);
    });

    var qtr1Arr = ["1st Quarter"];
    qtr1.forEach((sale: any) => {
      qtr1Arr.push(sale);
    });
    chartData.push(qtr1Arr);

    var qtr2Arr = ["2nd Quarter"];
    qtr2.forEach((sale: any) => {
      qtr2Arr.push(sale);
    });
    chartData.push(qtr2Arr);

    var qtr3Arr = ["3rd Quarter"];
    qtr3.forEach((sale: any) => {
      qtr3Arr.push(sale);
    });
    chartData.push(qtr3Arr);

    var qtr4Arr = ["4th Quarter"];
    qtr4.forEach((sale: any) => {
      qtr4Arr.push(sale);
    });
    chartData.push(qtr4Arr);

    console.log(chartData);
    console.log(data.columnNames);

    this.title = data.title;
    this.type = data.type;
    this.data = chartData;
    this.columnNames = data.columnNames;
    this.width = 950;
    this.height = 400;
    this.options = {};
  }
}
