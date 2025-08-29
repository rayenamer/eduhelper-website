import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { CommunityComponent } from './community/community.component';
import { BlogComponent } from './blog/blog.component';
import { UniversityApplicationComponent } from './services-detail/university-application/university-application.component';
import { VisaProcedureComponent } from './services-detail/visa-procedure/visa-procedure.component';
import { HousingSearchComponent } from './services-detail/housing-search/housing-search.component';
import { TravelInsuranceComponent } from './services-detail/travel-insurance/travel-insurance.component';
import { ScholarshipGuidanceComponent } from './services-detail/scholarship-guidance/scholarship-guidance.component';
import { InterviewPreparationComponent } from './services-detail/interview-preparation/interview-preparation.component';
import { OfficialTranslationComponent } from './services-detail/official-translation/official-translation.component';
import { HotelTicketReservationComponent } from './services-detail/hotel-ticket-reservation/hotel-ticket-reservation.component';
import { EducationalEventsManagementComponent } from './services-detail/educational-events-management/educational-events-management.component';
export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'community',component:CommunityComponent},
    {path: 'careers', component: CareersComponent },
    {path: 'aboutus', component: AboutusComponent },
    {path: 'blog', component: BlogComponent },
    {path: 'services-detail/university-application', component: UniversityApplicationComponent},
    {path: 'services-detail/visa-procedure', component: VisaProcedureComponent},
    {path: 'services-detail/housing-search', component: HousingSearchComponent},
    {path: 'services-detail/travel-insurance', component: TravelInsuranceComponent},
    {path: 'services-detail/scholarship-guidance', component: ScholarshipGuidanceComponent},
    {path: 'services-detail/interview-preparation', component: InterviewPreparationComponent},
    {path: 'services-detail/official-translation', component: OfficialTranslationComponent},
    {path: 'services-detail/hotel-ticket-reservation', component: HotelTicketReservationComponent},
    {path: 'services-detail/educational-events-management', component: EducationalEventsManagementComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full' },
];
