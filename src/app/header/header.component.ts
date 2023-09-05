import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 
 constructor(private headerService: HeaderService){}

 name : string = "";
 titulos : string = "??";
 mision : string = "??";
 fotos : string = "";
 
 ngOnInit(): void {
   this.headerService.getHeader()
   .subscribe( (data: any) => {
	   console.log(data);
	   //alert(data);
	   this.name = data.name;
	   this.titulos = data.titulos;
	   this.mision = data.mision;
	   this.fotos = data.fotos;

   });
 }

}
