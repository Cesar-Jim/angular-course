import { Component } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-dona",
  templateUrl: "./dona.component.html",
  styleUrls: ["./dona.component.css"]
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: Label[] = ["Rib Eye", "New York", "Picaña"];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: ChartType = "doughnut";

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomNumbers() {
    this.doughnutChartData = [
      Math.round(Math.random() * 500) + 1,
      Math.round(Math.random() * 500) + 1,
      Math.round(Math.random() * 500) + 1
    ];
  }
}
