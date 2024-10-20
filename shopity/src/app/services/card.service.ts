import { Injectable } from '@angular/core';
import { Products } from './products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  carditems:Products[]=[];
  additemtocard(products:Products){
    this.carditems.push(products);
  }
  getitems(){
    return of(this.carditems);
  }
  getlength(){
  return this.carditems.length;
  }
  getTotal(){
    let total=0;
    for(let i=0; i<this.carditems.length;i++){
      total+=this.carditems[i].productPrice;
    }
    return total;
  }
  deletecartitems(prod:Products){
    let res=this.carditems.findIndex(p=>p.productId==prod.productId);
    this.carditems.splice(res,1)
  }

  removeAll(){
    this.carditems.splice(0,this.carditems.length)

    
  }
  
}
