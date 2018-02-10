import { Component, OnInit } from '@angular/core';
import { InformationServiceService } from '../services/information-service.service';


@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent implements OnInit {

  nombre:string='';
  apellido:string ='';
  edad:number=0;
  isSave:boolean=false;

  peopleList: any =[];

  constructor(private peopleService: InformationServiceService) { }

  ngOnInit() {
  }

  saveData(){
    this.peopleService.setInformationPeople({nombre: this.nombre, apellido:this.apellido, edad:this.apellido}).subscribe(
      (response)=>{
        console.log(response);
        this.isSave=true;
      },
      (err)=>{
        console.log(err);
        this.isSave=false;
      }
    );
  }

  clean(){
    this.nombre='';
    this.apellido ='';
    this.edad=0;
    this.isSave=false;
  }
}
