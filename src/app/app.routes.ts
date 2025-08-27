import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { CommunityComponent } from './community/community.component';
import { UniversityApplicationComponent } from './services-detail/university-application/university-application.component';
import { VisaProcedureComponent } from './services-detail/visa-procedure/visa-procedure.component';
import { HousingSearchComponent } from './services-detail/housing-search/housing-search.component';
import { TravelInsuranceComponent } from './services-detail/travel-insurance/travel-insurance.component';
import { ScholarshipGuidanceComponent } from './services-detail/scholarship-guidance/scholarship-guidance.component';
import { InterviewPreparationComponent } from './services-detail/interview-preparation/interview-preparation.component';
import { OfficialTranslationComponent } from './services-detail/official-translation/official-translation.component';
import { HotelTicketReservationComponent } from './services-detail/hotel-ticket-reservation/hotel-ticket-reservation.component';
export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'community',component:CommunityComponent},
    {path: 'careers', component: CareersComponent },
    {path: 'aboutus', component: AboutusComponent },
    {path: 'service/university-application', component: UniversityApplicationComponent},
    {path: 'service/visa-procedure', component: VisaProcedureComponent},
    {path: 'service/housing-search', component: HousingSearchComponent},
    {path: 'service/travel-insurance', component: TravelInsuranceComponent},
    {path: 'service/scholarship-guidance', component: ScholarshipGuidanceComponent},
    {path: 'service/interview-preparation', component: InterviewPreparationComponent},
    {path: 'service/official-translation', component: OfficialTranslationComponent},
    {path: 'service/hotel-ticket-reservation', component: HotelTicketReservationComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full' },
];
