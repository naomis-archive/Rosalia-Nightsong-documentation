import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocalInstanceComponent } from './local-instance/local-instance.component';
import { BotSetupComponent } from './bot-setup/bot-setup.component';
import { BotDeployComponent } from './bot-deploy/bot-deploy.component';
import { ContributeComponent } from './contribute/contribute.component';
import { TroubleComponent } from './trouble/trouble.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EventsComponent } from './events/events.component';
import { DefaultComponent } from './default/default.component';
import { ArtContribsComponent } from './art-contribs/art-contribs.component';
import { ArtComponent } from './art/art.component';
import { BiographyComponent } from './biography/biography.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    LocalInstanceComponent,
    BotSetupComponent,
    BotDeployComponent,
    ContributeComponent,
    TroubleComponent,
    PrivacyComponent,
    EventsComponent,
    DefaultComponent,
    ArtContribsComponent,
    ArtComponent,
    BiographyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
