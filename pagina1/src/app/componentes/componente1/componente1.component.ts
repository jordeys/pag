import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{
constructor(private router: Route) { }

numero:any=0;

sueldos=[1700, 1600, 1900, 1880, 2000, 5444];
ngOnInit(): void {
  this.numero=0;
}
}
