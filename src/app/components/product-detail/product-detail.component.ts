import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  id:string="";
  constructor(private route:ActivatedRoute){
    route.paramMap.subscribe((params)=>{
      this.id=params.get('id')!;
    })
  }
}
