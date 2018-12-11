import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  visible = false;
  constructor(private router: Router) { 
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        if(event.url === '/' || event.url === '/home') {
          this.visible = true;
        }
        else {
          this.visible = false;
        }
      }
    });
  }

  
  ngOnInit() {    
  }

}
