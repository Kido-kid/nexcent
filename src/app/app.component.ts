import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './Pages/hero-section/hero-section.component';
import { ClientSectionComponent } from './Pages/client-section/client-section.component';
import { ValuePropositionComponent } from './Pages/value-proposition/value-proposition.component';
import { PixelgradeComponent } from './Pages/pixelgrade/pixelgrade.component';
import { AchievementsComponent } from './Pages/achievements/achievements.component';
import { ArticlePreviewComponent } from './Pages/article-preview/article-preview.component';
import { TestimonialComponent } from './Pages/testimonial/testimonial.component';
import { DemoNavigationComponent } from './Pages/demo-navigation/demo-navigation.component';
import { CommunityUpdatesComponent } from './Pages/community-updates/community-updates.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClientSectionComponent,ValuePropositionComponent,
    PixelgradeComponent,AchievementsComponent,ArticlePreviewComponent,
    TestimonialComponent,DemoNavigationComponent,CommunityUpdatesComponent,
    HeaderComponent,HeroSectionComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nexcent';
}
