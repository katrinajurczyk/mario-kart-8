import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { drivers } from '../drivers';
import { bodies } from '../bodies';
import { tires } from '../tires';
import { gliders } from '../gliders';
import { Driver, Setup } from '../types';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, Sort, MatSortable } from '@angular/material/sort';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  drivers = drivers;
  bodies = bodies;
  tires = tires;
  gliders = gliders;

  setups: Setup[] = [];

  setupsMaxSpeed: Setup[] = [];
  setupsMaxAcceleration: Setup[] = [];
  setupsBalancedSpeedAcceleration: Setup[] = [];

  // displayedSetups: Setup[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Setup> = new MatTableDataSource<Setup>(this.setups);

  selectedOptimization: String = "";
  optsOptions: String[] = ["Max Speed", "Max Acceleration", "Balanced Speed and Acceleration"];

  // @ViewChild(MatSort, { static: false })
  // matSort!: MatSort;

  mySort() {
    if (this.selectedOptimization == "Max Speed") {
      this.setups = this.setups.sort((x,y) => y.speed - x.speed);
    } else if (this.selectedOptimization == "Max Acceleration") {
      this.setups = this.setups.sort((x,y) => y.acceleration - x.acceleration);
    } else if (this.selectedOptimization == "Balanced Speed and Acceleration") {
      this.setups = this.setups.sort((x,y) => x.speedAccelerationBalance - y.speedAccelerationBalance);
    }
  }

  onOptChange() {

    this.mySort();
    this.dataSource = new MatTableDataSource<Setup>(this.setups);

    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    // this.obs = this.obs.map(setups => setups.mySort());

    // if (this.selectedOptimization == "Max Speed") {
    //   this.obs.forEach(function (setup) {

    //   })
    // }

    // const matSort = this.dataSource.sort;
    // const toState = 'active';
    // const disableClear = false;

    // matSort?.sort({this.setups});

    // if (this.selectedOptimization == "Max Speed") {
    //   this.displayedSetups = this.setupsMaxSpeed;
    //   console.log("max speed");
    // } else {
    //   this.displayedSetups = this.setups;
    //   console.log("other");
    // }

    // this.setups = [];

    // this.dataSource.disconnect();
    // this.obs = this.dataSource.connect();
  }

  // length: number = drivers.length;
  // pageSize: number = 5;
  
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    for (var driver of this.drivers) {
      for (var body of this.bodies) {
        for (var tire of this.tires) {
          for (var glider of this.gliders) {
            const setup: Setup = {
              "driverName": driver.name,
              "bodyName": body.name,
              "tireName": tire.name,
              "gliderName": glider.name,
              "speedGround": driver.driverModel.speedGround + body.speedGround + tire.speedGround + glider.speedGround,
              "speedWater": driver.driverModel.speedWater + body.speedWater + tire.speedWater + glider.speedWater,
              "speedAir": driver.driverModel.speedAir + body.speedAir + tire.speedAir + glider.speedAir,
              "speedGravity": driver.driverModel.speedGravity + body.speedGravity + tire.speedGravity + glider.speedGravity,
              "speed": 0,
              "acceleration": driver.driverModel.acceleration + body.acceleration + tire.acceleration + glider.acceleration,
              "speedAccelerationBalance": 0,
              "weight": driver.driverModel.weight + body.weight + tire.weight + glider.weight,
              "handlingGround": driver.driverModel.handlingGround + body.handlingGround + tire.handlingGround + glider.handlingGround,
              "handlingWater": driver.driverModel.handlingWater + body.handlingWater + tire.handlingWater + glider.handlingWater,
              "handlingAir": driver.driverModel.handlingAir + body.handlingAir + tire.handlingAir + glider.handlingAir,
              "handlingGravity": driver.driverModel.handlingGravity + body.handlingGravity + tire.handlingGravity + glider.handlingGravity,
              "grip": driver.driverModel.grip + body.grip + tire.grip + glider.grip,
              "miniturbo": driver.driverModel.miniturbo + body.miniturbo + tire.miniturbo + glider.miniturbo,
              "insideDrift": body.insideDrift,
              // "paginator": this.paginator
            };
            setup.speed = (setup.speedGround + setup.speedWater + setup.speedAir + setup.speedGravity) / 4;
            setup.speedAccelerationBalance = Math.abs(setup.speed - setup.acceleration);
            this.setups.push(setup);
          }
        }
      }
    }
    // console.log("setups[5].weight = " + this.setups[5].weight);
    // console.log("setups: " + this.setups);

    // let setupsMaxSpeed = this.setups.sort((first, second) => 0 - (first.speed > second.speed ? -1 : 1));

    // this.displayedSetups = this.setups;

    // this.setupsMaxSpeed = $filter('orderBy')(this.setups, '-TypeId');

    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    // this.setups.paginator = this.paginator;
    // this.obs = this.setups;
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
