import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TempoComponent } from './tempo/tempo.component';
import { TempoService } from './tempo.service';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasService } from './disciplinas.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'tempo', component: TempoComponent },
      { path: 'disciplinas', component: DisciplinasComponent }
    ])
   ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    TempoComponent,
    DisciplinasComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TempoService, DisciplinasService ]
})
export class AppModule { }
