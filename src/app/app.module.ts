import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { HttpClientModule }  from '@angular/common/http';
import { Routes, RouterModule }  from '@angular/router';
import { InformationServiceService } from './services/information-service.service';
import { FormsModule }  from '@angular/forms';

const appRoutes: Routes=[
  {path: '', component: SearchPeopleComponent},
  {path: 'searchPeople', component: SearchPeopleComponent},
  {path: 'createPeople', component: CreatePeopleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePeopleComponent,
    SearchPeopleComponent
 
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [InformationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
