import { WelcomeComponent } from './ganesha/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './ganesha/portfolio/portfolio.component';
import { AboutComponent } from './ganesha/about/about.component';
import { ContactComponent } from './ganesha/contact/contact.component';
import { NotfoundComponent } from './ganesha/notfound/notfound.component';
import { GalleryArchComponent } from './ganesha/gallery-arch/gallery-arch.component';
import { GalleryLogoComponent } from './ganesha/gallery-logo/gallery-logo.component';
import { Gallery3dComponent } from './ganesha/gallery3d/gallery3d.component';
import { BusinessCardComponent } from './ganesha/business-card/business-card.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Redirige vers Welcome par défaut
  { path: 'welcome', component: WelcomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'galleryarch', component: GalleryArchComponent },
  { path: 'gallerylogo', component: GalleryLogoComponent },
  { path: 'gallery3D', component: Gallery3dComponent },
  { path: 'businessCard', component: BusinessCardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent } // Route 404 pour URL incorrecte
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
