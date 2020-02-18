import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Homepage2Component} from './template-pages/homepage2/homepage2.component';
import {HomepageComponent} from './template-pages/homepage/homepage.component';
import {ApplyToKingsterComponent} from './template-pages/apply-to-kingster/apply-to-kingster.component';
import {AboutUsComponent} from "./template-pages/about-us/about-us.component";
import {AlumniComponent} from "./template-pages/alumni/alumni.component";
import {ArtScienceComponent} from "./template-pages/art-science/art-science.component";
import {AthleticsComponent} from "./template-pages/athletics/athletics.component";
import {BachelorOfScienceInBusinessAdministrationComponent} from "./template-pages/bachelor-of-science-in-business-administration/bachelor-of-science-in-business-administration.component";


const routes: Routes = [
  {
    path: 'homepage-2',
    component: Homepage2Component
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'apply-to-kingster',
    component: ApplyToKingsterComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'alumni',
    component: AlumniComponent
  },
  {
    path: 'art-science',
    component: ArtScienceComponent
  },
  {
    path: 'athletics',
    component: AthleticsComponent
  },
  {
    path: 'bachelor',
    component: BachelorOfScienceInBusinessAdministrationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
