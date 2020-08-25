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
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TechExperienceChartComponent } from './tech-experience/tech-experience-chart/tech-experience-chart.component';
import { SkillCardsComponent } from './core-skills/skill-cards/skill-cards.component';
import { SkillCardComponent } from './core-skills/skill-card/skill-card.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { WorkHistoryTimelineComponent } from './work-history/work-history-timeline/work-history-timeline.component';
import { ProjectCardsComponent } from './projects/project-cards/project-cards.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    IntroComponent,
    TechExperienceComponent,
    TechExperienceChartComponent,
    CoreSkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    SkillCardsComponent,
    SkillCardComponent,
    WorkHistoryComponent,
    WorkHistoryTimelineComponent,
    ProjectCardsComponent,
    ProjectCardComponent
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
