import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtContribsComponent } from './art-contribs/art-contribs.component';
import { ArtComponent } from './art/art.component';
import { BiographyComponent } from './biography/biography.component';
import { BotDeployComponent } from './bot-deploy/bot-deploy.component';
import { BotSetupComponent } from './bot-setup/bot-setup.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DefaultComponent } from './default/default.component';
import { EventsComponent } from './events/events.component';
import { LocalInstanceComponent } from './local-instance/local-instance.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TroubleComponent } from './trouble/trouble.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'local', component: LocalInstanceComponent },
  { path: 'setup', component: BotSetupComponent },
  { path: 'deploy', component: BotDeployComponent },
  { path: 'default-cmd', component: DefaultComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'trouble', component: TroubleComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'art-contribs', component: ArtContribsComponent },
  { path: 'art', component: ArtComponent },
  { path: 'bio', component: BiographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
