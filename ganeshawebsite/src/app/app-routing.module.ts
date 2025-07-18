import { ArtistComponent } from './ganesha/artist/artist.component';
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
import { MockupsComponent } from './ganesha/mockups/mockups.component';
import { WelcomeComponent } from './ganesha/welcome/welcome.component';
import { GamesComponent } from './ganesha/games/games.component';
import { DesignerComponent } from './ganesha/designer/designer.component';
import { MusicComponent } from './ganesha/music/music.component';
import { AnimalComponent } from './ganesha/animal/animal.component';
import { HumanComponent } from './ganesha/human/human.component';
import { AdobePhotoshopComponent } from './adobe-photoshop/adobe-photoshop.component';
import { AdobeInDesignComponent } from './adobe-in-design/adobe-in-design.component';
import { AdobeIllustratorComponent } from './adobe-illustrator/adobe-illustrator.component';
import { BrandGuidelinesComponent } from './brand-guidelines/brand-guidelines.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Redirige vers Welcome par défaut
  { path: 'welcome', component: WelcomeComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'galleryarch', component: GalleryArchComponent },
  { path: 'gallerylogo', component: GalleryLogoComponent },
  { path: 'gallery3D', component: Gallery3dComponent },
  { path: 'businessCard', component: BusinessCardComponent },
  { path: 'mockups', component: MockupsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'designer', component: DesignerComponent },
  { path: 'music', component: MusicComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'human', component: HumanComponent },
  { path: 'photoshop', component: AdobePhotoshopComponent },
  { path: 'indesign', component: AdobeInDesignComponent },
  { path: 'illustrator', component: AdobeIllustratorComponent },
  { path: 'brandguidelines', component: BrandGuidelinesComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', component: NotfoundComponent } // Route 404 pour URL incorrecte
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
