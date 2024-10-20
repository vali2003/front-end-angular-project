import { Component } from '@angular/core';
import { Products } from '../services/products';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  productId:any;
    productName:any;
    productCompany:any;
    productPrice:any;
    productDescription:any;
    productImage:any;
    newproduct:any;
    constructor(private services:ProductsService, private router:Router){}
    addnewproduct():void{
      this.newproduct={
        productId:this.productId,
        productName:this.productName,
        productCompany:this.productCompany,
        productPrice:this.productPrice,
        productDescription:this.productDescription,
        productImage:this.productImage
      }
      this.services.addnewproduct(this.newproduct);
      Swal.fire({
        title: "hello",
        text: "add product successfuly",
        icon: "success"
      });
      this.router.navigateByUrl("/admin/mobile");
    }
}

