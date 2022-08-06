import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SectionsComponent } from './components/sections/sections.component';
import { AddEduComponent } from './components/modals/add-edu/add-edu.component';
import { AddExpComponent } from './components/modals/add-exp/add-exp.component';
import { AddSkillComponent } from './components/modals/add-skill/add-skill.component';
import { AddProyComponent } from './components/modals/add-proy/add-proy.component';
import { EditEduComponent } from './components/modals/edit-edu/edit-edu.component';
import { EditExpComponent } from './components/modals/edit-exp/edit-exp.component';
import { EditSkillComponent } from './components/modals/edit-skill/edit-skill.component';
import { EditProyComponent } from './components/modals/edit-proy/edit-proy.component';
import { EditInfoComponent } from './components/modals/edit-info/edit-info.component';
import { DeleteEduComponent } from './components/modals/delete-edu/delete-edu.component';
import { DeleteExpComponent } from './components/modals/delete-exp/delete-exp.component';
import { DeleteSkillComponent } from './components/modals/delete-skill/delete-skill.component';
import { DeleteProyComponent } from './components/modals/delete-proy/delete-proy.component';

import { PersonService } from './services/services-model/person.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    PortfolioComponent,
    SectionsComponent,
    AddEduComponent,
    AddExpComponent,
    AddSkillComponent,
    AddProyComponent,
    EditEduComponent,
    EditExpComponent,
    EditSkillComponent,
    EditProyComponent,
    EditInfoComponent,
    DeleteEduComponent,
    DeleteExpComponent,
    DeleteSkillComponent,
    DeleteProyComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatProgressBarModule,
  ],
  providers: [PersonService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
