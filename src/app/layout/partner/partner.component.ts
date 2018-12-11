import { Component, OnInit } from '@angular/core';

const PARTNER_LIST = [
  {
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },
  {
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },{
    title: 'TFG partner',
    photo: 'assets/images/tfg-partner.jpg'
  },
]
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  partner_list = PARTNER_LIST;
  constructor() { }

  ngOnInit() {
  }

}
