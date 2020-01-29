import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './template-pages/not-found/not-found.component';
import { AboutUsComponent } from './template-pages/about-us/about-us.component';
import { AlumniComponent } from './template-pages/alumni/alumni.component';
import { ApplyToKingsterComponent } from './template-pages/apply-to-kingster/apply-to-kingster.component';
import { ArtScienceComponent } from './template-pages/art-science/art-science.component';
import { AthleticsComponent } from './template-pages/athletics/athletics.component';
import { BachelorOfScienceInBusinessAdministrationComponent } from './template-pages/bachelor-of-science-in-business-administration/bachelor-of-science-in-business-administration.component';
import { BlogFullBothSidebarComponent } from './template-pages/blog-full-both-sidebar/blog-full-both-sidebar.component';
import { BlogFullBothSidebarWithFrameComponent } from './template-pages/blog-full-both-sidebar-with-frame/blog-full-both-sidebar-with-frame.component';
import { BlogFullLeftSidebarComponent } from './template-pages/blog-full-left-sidebar/blog-full-left-sidebar.component';
import { BlogFullLeftSidebarWithFrameComponent } from './template-pages/blog-full-left-sidebar-with-frame/blog-full-left-sidebar-with-frame.component';
import { BlogFullRightSidebarComponent } from './template-pages/blog-full-right-sidebar/blog-full-right-sidebar.component';
import { BlogFullRightSidebarWithFrameComponent } from './template-pages/blog-full-right-sidebar-with-frame/blog-full-right-sidebar-with-frame.component';
import { BlogGridTwoColumnsComponent } from './template-pages/blog-grid-two-columns/blog-grid-two-columns.component';
import { BlogGridTwoColumnsNoSpaceComponent } from './template-pages/blog-grid-two-columns-no-space/blog-grid-two-columns-no-space.component';
import { BlogGridThreeColumnsComponent } from './template-pages/blog-grid-three-columns/blog-grid-three-columns.component';
import { BlogGridFourColumnsNoSpaceComponent } from './template-pages/blog-grid-four-columns-no-space/blog-grid-four-columns-no-space.component';
import { BlogGridFourColumnsComponent } from './template-pages/blog-grid-four-columns/blog-grid-four-columns.component';
import { BlogGridThreeColumnsNoSpaceComponent } from './template-pages/blog-grid-three-columns-no-space/blog-grid-three-columns-no-space.component';
import { CampusTourComponent } from './template-pages/campus-tour/campus-tour.component';
import { ComingSoonComponent } from './template-pages/coming-soon/coming-soon.component';
import { ContactComponent } from './template-pages/contact/contact.component';
import { Contact2Component } from './template-pages/contact2/contact2.component';
import { Contact3Component } from './template-pages/contact3/contact3.component';
import { CourseList1Component } from './template-pages/course-list1/course-list1.component';
import { CourseList2Component } from './template-pages/course-list2/course-list2.component';
import { EngineeringComponent } from './template-pages/engineering/engineering.component';
import { EventCalendarComponent } from './template-pages/event-calendar/event-calendar.component';
import { FinanceComponent } from './template-pages/finance/finance.component';
import { FinanceFacultyComponent } from './template-pages/finance-faculty/finance-faculty.component';
import { GalleryComponent } from './template-pages/gallery/gallery.component';
import { GiveToKingsterComponent } from './template-pages/give-to-kingster/give-to-kingster.component';
import { Homepage2Component } from './template-pages/homepage2/homepage2.component';
import { HospitalityManagementComponent } from './template-pages/hospitality-management/hospitality-management.component';
import { IntroductionToFinancialAccountingComponent } from './template-pages/introduction-to-financial-accounting/introduction-to-financial-accounting.component';
import { JohnHagensyPhdComponent } from './template-pages/john-hagensy-phd/john-hagensy-phd.component';
import { MaintenanceComponent } from './template-pages/maintenance/maintenance.component';
import { MedicineComponent } from './template-pages/medicine/medicine.component';
import { PhysicsComponent } from './template-pages/physics/physics.component';
import { PriceTableComponent } from './template-pages/price-table/price-table.component';
import { ScholarshipsComponent } from './template-pages/scholarships/scholarships.component';
import { SchoolOfLawComponent } from './template-pages/school-of-law/school-of-law.component';
import { SingleportfolioComponent } from './template-pages/singleportfolio/singleportfolio.component';
import { StandardPostTypeComponent } from './template-pages/standard-post-type/standard-post-type.component';
import { UniversityLifeComponent } from './template-pages/university-life/university-life.component';
import { HomepageComponent } from './template-pages/homepage/homepage.component';
import { HeaderComponent } from './template-pages/header/header.component';
import { MobileHeaderComponent } from './template-pages/mobile-header/mobile-header.component';
import { FooterComponent } from './template-pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutUsComponent,
    AlumniComponent,
    ApplyToKingsterComponent,
    ArtScienceComponent,
    AthleticsComponent,
    BachelorOfScienceInBusinessAdministrationComponent,
    BlogFullBothSidebarComponent,
    BlogFullBothSidebarWithFrameComponent,
    BlogFullLeftSidebarComponent,
    BlogFullLeftSidebarWithFrameComponent,
    BlogFullRightSidebarComponent,
    BlogFullRightSidebarWithFrameComponent,
    BlogGridTwoColumnsComponent,
    BlogGridTwoColumnsNoSpaceComponent,
    BlogGridThreeColumnsComponent,
    BlogGridFourColumnsNoSpaceComponent,
    BlogGridFourColumnsComponent,
    BlogGridThreeColumnsNoSpaceComponent,
    CampusTourComponent,
    ComingSoonComponent,
    ContactComponent,
    Contact2Component,
    Contact3Component,
    CourseList1Component,
    CourseList2Component,
    EngineeringComponent,
    EventCalendarComponent,
    FinanceComponent,
    FinanceFacultyComponent,
    GalleryComponent,
    GiveToKingsterComponent,
    Homepage2Component,
    HospitalityManagementComponent,
    IntroductionToFinancialAccountingComponent,
    JohnHagensyPhdComponent,
    MaintenanceComponent,
    MedicineComponent,
    PhysicsComponent,
    PriceTableComponent,
    ScholarshipsComponent,
    SchoolOfLawComponent,
    SingleportfolioComponent,
    StandardPostTypeComponent,
    UniversityLifeComponent,
    HomepageComponent,
    HeaderComponent,
    MobileHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
