import { MatPaginator } from "@angular/material/paginator";

export interface Body {
    name: string;
    speedGround: number;
    speedWater: number;
    speedAir: number;
    speedGravity: number;
    acceleration: number;
    weight: number;
    handlingGround: number;
    handlingWater: number;
    handlingAir: number;
    handlingGravity: number;
    grip: number;
    miniturbo: number;
    insideDrift: boolean;
}

export interface DriverModel {
    name: string;
    size: string;
    speedGround: number;
    speedWater: number;
    speedAir: number;
    speedGravity: number;
    acceleration: number;
    weight: number;
    handlingGround: number;
    handlingWater: number;
    handlingAir: number;
    handlingGravity: number;
    grip: number;
    miniturbo: number;
}

export interface Driver {
    name: string;
    size: string;
    driverModel: DriverModel;
}

export interface Tire {
    name: string;
    speedGround: number;
    speedWater: number;
    speedAir: number;
    speedGravity: number;
    acceleration: number;
    weight: number;
    handlingGround: number;
    handlingWater: number;
    handlingAir: number;
    handlingGravity: number;
    grip: number;
    miniturbo: number;
}

export interface Glider {
    name: string;
    speedGround: number;
    speedWater: number;
    speedAir: number;
    speedGravity: number;
    acceleration: number;
    weight: number;
    handlingGround: number;
    handlingWater: number;
    handlingAir: number;
    handlingGravity: number;
    grip: number;
    miniturbo: number;
}

export interface Setup {
    driverName: string;
    bodyName: string;
    tireName: string;
    gliderName: string;
    speedGround: number;
    speedWater: number;
    speedAir: number;
    speedGravity: number;
    speed: number;
    acceleration: number;
    speedAccelerationBalance: number;
    weight: number;
    handlingGround: number;
    handlingWater: number;
    handlingAir: number;
    handlingGravity: number;
    grip: number;
    miniturbo: number;
    insideDrift: boolean;
    // paginator: MatPaginator;
}

// export interface SetupList {
//     setups: Setup[];
//     paginator: MatPaginator;
// }