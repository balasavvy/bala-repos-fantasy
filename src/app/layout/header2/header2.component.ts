import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

const OPTIONS = [
  'Edit Profile', 'Change Password', 'Log Out'
]

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  options = OPTIONS;
  public currentOption;
  @ViewChild('forgotForm') forgotForm: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  openNav() {
    document.getElementById("nav2").style.width = "210px";
  }
  closeNav() {
    document.getElementById("nav2").style.width = "0";
}
goTohome() {
    setTimeout( () => {
      $('#login-tab, #login').removeClass('active');
      $('#signup-tab, #signup').addClass('active');
    }, 100) 
  
    this.router.navigate(['/']);

  }

  openMenu(e: Event) {  
    e.stopPropagation(); 
   var target = e.currentTarget;
   
    $(target).parent().find('.dropdown-content').addClass('show');
  }

  onClickedOutside(e: Event) {
    //e.preventDefault();
    if($('.dropdown-content ').hasClass('show')) {
      $(".dropdown-content").removeClass("show");
    }
    if(document.querySelector('#menuDropdown').classList.contains('show')) {
      document.getElementById("menuDropdown").classList.remove("show");
    }
  }
  selectOption(option) {
    if(option === 'Log Out') {
      this.router.navigate(['/']);
    }
    if(option === 'Change Password') {
      this.router.navigate(['/']);
      setTimeout(() => {
        $("#forgotPasswordForm").addClass('modal fade show d-block');
        $("body").addClass('modal-open');
        $("body").append('<div class="modal-backdrop fade show"></div>');
      }, 300);    
    }

    
    // if($('.dropdown-content ').hasClass('show')) {
    //   $(".dropdown-content").removeClass("show");
    // }

  }
}

