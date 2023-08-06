import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers:[DataService]
})
export class InfoComponent {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];
  infoReceived4: string[]=[];
  infoReceived5: string[]=[];

  getInfoFromService1(){
    this.infoReceived1= this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoReceived2= this.dservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3= this.dservice.getInfo3()
  }
  getInfoFromService4(){
    this.infoReceived4= this.dservice.getInfo4()
  }
  getInfoFromService5(){
    this.infoReceived5= this.dservice.getInfo5()
  }

 constructor(private dservice: DataService){}

updateInfo1(i: any){
  this.dservice.addInfo1(i.value.location)
}
updateInfo2(s: any){
  this.dservice.addInfo2(s.value.location)
}
updateInfo3(a: any){
  this.dservice.addInfo3(a.value.location)
}
updateInfo4(c: any){
  this.dservice.addInfo4(c.value.location)
}
updateInfo5(k: any){
  this.dservice.addInfo5(k.value.location)
}

}
