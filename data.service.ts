import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1 :string[]=["Isaac Robert","front-end developer", "first year"]
  info2 :string[]=["Melckzedeck silemu","front-end developer","first year" ]
  info3 :string[]=["Elinipa","UI designer","third year" ]
  info4 :string[]=["Muddy","back end developer","first year" ]
  info5 :string[]=["Perfect","UI designer","first year" ]

 getInfo1():string[]{
  return this.info1
 }

 getInfo2():string[]{
  return this.info2
 }

 getInfo3():string[]{
  return this.info3
 }

 getInfo4():string[]{
  return this.info4
 }

 getInfo5():string[]{
  return this.info5
 }
addInfo1(info:any): string[]{
  this.info1.push(info)
  return this.info1
}
addInfo2(info:any): string[]{
  this.info2.push(info)
  return this.info2
}
addInfo3(info:any): string[]{
  this.info3.push(info)
  return this.info3
}
addInfo4(info:any): string[]{
  this.info4.push(info)
  return this.info4
}
addInfo5(info:any): string[]{
  this.info5.push(info)
  return this.info5
}

  constructor() { }
}
