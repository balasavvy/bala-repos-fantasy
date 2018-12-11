import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { MenuOptionsComponent }   from './menu-options/menu-options.component';
import { SquadSelectionComponent }   from './squad-selection/squad-selection.component';
import { WinnerListComponent }   from './winner-list/winner-list.component';
import { CreateTeamComponent }   from './squad-selection/create-team/create-team.component';
import { FaqComponent }   from './faq/faq.component';
import { PrivacyPolicyComponent }   from './privacy-policy/privacy-policy.component';
import { LeaderBoardComponent }   from './leader-board/leader-board.component';
import { SfsComponent }   from './leader-board/sfs/sfs.component';
import { DfsComponent }   from './leader-board/dfs/dfs.component';
import { LeaderboardPlayGameComponent }   from './leaderboard-play-game/leaderboard-play-game.component';
import { RankingComponent }   from './ranking/ranking.component';
import { ContactComponent }   from './contact/contact.component';
import { PartnerComponent }   from './partner/partner.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SidebarComponent } from './my-account/sidebar/sidebar.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { HowToPlayTextComponent } from './how-to-play-text/how-to-play-text.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'menu-options',  component: MenuOptionsComponent },
  { path: 'squad-selection',  component: SquadSelectionComponent },
  { path: 'winner-list',  component: WinnerListComponent },
  { path: 'create-team',  component: CreateTeamComponent },
  { path: 'faq',  component: FaqComponent },
  { path: 'privacy-policy',  component: PrivacyPolicyComponent },
  { path: 'leaderboard/sfs',  component: SfsComponent },
  { path: 'leaderboard/dfs',  component: DfsComponent },
  { path: 'leaderboard-game-play',  component: LeaderboardPlayGameComponent },
  { path: 'ranking',  component: RankingComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'partner',  component: PartnerComponent },
  { path: 'my-account',  component: MyAccountComponent },
  { path: 'sidebar',  component: SidebarComponent },
  { path: 'personal-details',  component: PersonalDetailsComponent },
  { path: 'about-us',  component: AboutComponent },
  { path: 'legal',  component: LegalComponent },
  { path: 'how-to-play',  component: HowToPlayTextComponent },
  { path: 'home/:id',
  component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class LayoutRoutingModule {}