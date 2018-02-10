import { Component, OnInit } from '@angular/core';
import { InformationServiceService } from '../services/information-service.service';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {

  peopleList: any=[];
  people: any ={};

  nombre='';
  apellido='';
  edad='';

  constructor(private infoService:InformationServiceService) {
    this.infoService.getInformationPeople().subscribe((peopleResp)=>{
      this.peopleList=peopleResp;
      this.peopleList = Object.keys(this.peopleList).map(key=> this.peopleList[key]);      
      console.log(this.peopleList);
    },
    (peopleErr)=>{
      console.log(`Mensaje Error ${peopleErr}`);
    });
   }

  ngOnInit() {
  }

  setPeople(){
    let numero= Math.round(Math.random() * (4 - 1) + 1);

    this.nombre = this.peopleList[numero].nombre;
    this.apellido = this.peopleList[numero].apellido;
    this.edad = this.peopleList[numero].edad;
  }
}
