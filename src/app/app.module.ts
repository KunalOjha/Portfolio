import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
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
import { TechExperienceChartComponent } from './tech-experience/tech-experience-chart/tech-experience-chart.component';
import { SkillCardsComponent } from './core-skills/skill-cards/skill-cards.component';
import { SkillCardComponent } from './core-skills/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    IntroComponent,
    TechExperienceComponent,
    TechExperienceChartComponent,
    CoreSkillsComponent,
    WorkHistoryComponent,
    ProjectsComponent,
    ContactMeComponent,
    SkillCardsComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
