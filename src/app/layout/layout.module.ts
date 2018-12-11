import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Daterangepicker } from 'ng2-daterangepicker';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { SliderComponent } from './home/slider/slider.component';
import { HowToPlayComponent } from './home/how-to-play/how-to-play.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { UpcomingMatchesComponent } from './home/upcoming-matches/upcoming-matches.component';
import { UpcomingSeriesComponent } from './home/upcoming-series/upcoming-series.component';
import { WaysToWinComponent } from './home/ways-to-win/ways-to-win.component';
import { ContraryComponent } from './home/contrary/contrary.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Header2Component } from './header2/header2.component';
import { Footer2Component } from './footer2/footer2.component';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { LiveMatchComponent } from './menu-options/live-match/live-match.component';
import { UpcomingMatchComponent } from './menu-options/upcoming-match/upcoming-match.component';
import { ResultsComponent } from './menu-options/results/results.component';
import { SquadSelectionComponent } from './squad-selection/squad-selection.component';
import { WinnerListComponent } from './winner-list/winner-list.component';
import { FieldErrorDisplayComponent } from './home/slider/field-error-display/field-error-display.component';


import { ClickOutsideModule } from 'ng4-click-outside';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { PlayerInfoComponent } from './squad-selection/player-info/player-info.component';
import { CreateTeamComponent } from './squad-selection/create-team/create-team.component';
import { MenuComponent } from './squad-selection/menu/menu.component';
import { PlayersComponent } from './players/players.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RankingComponent } from './ranking/ranking.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SidebarComponent } from './my-account/sidebar/sidebar.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MyFinancesComponent } from './my-account/my-finances/my-finances.component';
import { PersonalInformationComponent } from './personal-details/personal-information/personal-information.component';
import { BankDetailsComponent } from './personal-details/bank-details/bank-details.component';
import { PanDetailsComponent } from './personal-details/pan-details/pan-details.component';
import { DepositeComponent } from './personal-details/deposite/deposite.component';
import { WithdrawComponent } from './personal-details/withdraw/withdraw.component';
import { PassbookComponent } from './personal-details/passbook/passbook.component';
import { DetailsComponent } from './personal-details/details/details.component';
import { TopbarComponent } from './personal-details/topbar/topbar.component';
import { SidenavComponent } from './personal-details/sidenav/sidenav.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { DfsLiveMatchComponent } from './menu-options/dfs-live-match/dfs-live-match.component';
import { DfsUpcomingMatchComponent } from './menu-options/dfs-upcoming-match/dfs-upcoming-match.component';
import { SfsUpcomingMatchComponent } from './menu-options/sfs-upcoming-match/sfs-upcoming-match.component';
import { LeaderboardPlayGameComponent } from './leaderboard-play-game/leaderboard-play-game.component';
import { LeaderboardGamePlayListComponent } from './leaderboard-play-game/leaderboard-game-play-list/leaderboard-game-play-list.component';
import { SfsComponent } from './leader-board/sfs/sfs.component';
import { DfsComponent } from './leader-board/dfs/dfs.component';
import { OtpComponent } from './home/otp/otp.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { HowToPlayTextComponent } from './how-to-play-text/how-to-play-text.component';
import { CreateTeamPlayersComponent } from './squad-selection/create-team/create-team-players/create-team-players.component';
import { InformationComponent } from './information/information.component';
import { NewsComponent } from './news/news.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,  
    FooterComponent, HomeComponent, SliderComponent, HowToPlayComponent, HowItWorksComponent, UpcomingMatchesComponent, UpcomingSeriesComponent,
     WaysToWinComponent, ContraryComponent, WelcomeComponent, Header2Component, Footer2Component, 
     MenuOptionsComponent, LiveMatchComponent, UpcomingMatchComponent, ResultsComponent, 
     SquadSelectionComponent, WinnerListComponent, FieldErrorDisplayComponent, PlayerInfoComponent, 
     CreateTeamComponent, MenuComponent, PlayersComponent, FaqComponent, PrivacyPolicyComponent, 
     LeaderBoardComponent, BreadcrumbComponent, RankingComponent, ContactComponent, PartnerComponent, 
     MyAccountComponent, SidebarComponent, PersonalDetailsComponent, MyFinancesComponent, PersonalInformationComponent, BankDetailsComponent, PanDetailsComponent, DepositeComponent, WithdrawComponent, PassbookComponent, DetailsComponent, TopbarComponent, SidenavComponent, SignUpComponent,SignInComponent, ForgotPasswordComponent, DfsLiveMatchComponent, DfsUpcomingMatchComponent,SfsUpcomingMatchComponent, LeaderboardPlayGameComponent, LeaderboardGamePlayListComponent, SfsComponent, DfsComponent, OtpComponent, AboutComponent, LegalComponent, HowToPlayTextComponent, CreateTeamPlayersComponent, InformationComponent, NewsComponent, DiscussionComponent, SearchComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
    LayoutRoutingModule,
    ClickOutsideModule,
    SelectDropDownModule,
    Daterangepicker
   ],
   entryComponents: [
    FieldErrorDisplayComponent
  ],
})
export class LayoutModule { }
