import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { TechExperienceComponent } from './tech-experience/tech-experience.component';
import { CoreSkillsComponent } from './core-skills/core-skills.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    IntroComponent,
    TechExperienceComponent,
    CoreSkillsComponent,
    WorkHistoryComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
