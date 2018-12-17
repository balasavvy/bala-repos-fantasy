import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayersComponent } from '../players/players.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

const teams = [{
"country":"India",
"code" : "ind"
},
{
  "country":"Australia",
  "code" : "aus"
}
]

const sortOptionArray = [{
"display":"Player name",
"code" : "name"
},
{
  "display":"Credit",
  "code" : "credit"
},
{
  "display":"Fantasy point",
  "code" : "points"
}
/*,
{
  "display":"Role",
  "code" : "role"
}*/
  
]

const config1 = {
  placeholder: 'Team',
  displayKey: 'country'
}

const config2 = {
  placeholder: 'Sort',
  displayKey: 'display',
  search:false
}

@Component({
  selector: 'app-squad-selection',
  templateUrl: './squad-selection.component.html',
  styleUrls: ['./squad-selection.component.css'],
  
})
export class SquadSelectionComponent implements OnInit {
  listOfPlayers : any [];
  myplayers: any [];
  teams = teams;
  sortOptionArray = sortOptionArray;
  sortOption : any = [];
  config1 = config1;
  config2= config2;
  isActiveId;
  activeRole;
  allRole = [];
  option = 0;
  selectedTeam: any = [];
  teamSelected : Boolean = false;
  public filteredTeam :string;
  myPlayersList : any [];
  thead_sort :Boolean =false;
  isDesc: boolean = false;


  @ViewChild('players')
  private players: PlayersComponent;

  constructor(private http: Http) { }
  
  ngOnInit() {
    
    this.http.get("assets/api/players.json")
    .map((data) => {
      return data.json();
    })
    .subscribe((success) => {     
      this.listOfPlayers = success.playerslist; 
            this.getplayers(this.listOfPlayers)
    });  
    this.option = 0;    
    this.activeRole = 'all';
  }

  getplayers(lists){
    this.myplayers = lists;

    if(typeof this.sortOption.length){
      this.sortedBy(this.myplayers,this.sortOption.code);
    }
    this.myPlayersList= this.myplayers
    
  }
  // Row Selection
  selectRow(i) {        
   this.isActiveId = i;
  }

  addPlayer(id) {
    this.isActiveId = id;
    
  }

  getActiveTab(){
    return this.activeRole
  }
  selectNav($event) {    
    this.option = $event; 
  }

  //On change event handler for Team selection
  selectTeamFn(e){
    this.teamSelected =  true;     
    this.displayByTeam(e);
  }
  //Handling to display as per filtered and sort records
  //need to optimize this code
  showRole(el) {
      this.activeRole = el;
      if(!this.teamSelected){      
        if (el !='all'){
        let  players_List = this.listOfPlayers .filter(function (ele) {
        return ele.role == el 
        });
          this.getplayers(players_List)
        }else{
          this.getplayers(this.listOfPlayers)
        }
      }else{
        let team=(this.selectedTeam.length >0) ? this.selectedTeam[0].code : "no-selection";
        if(team !="no-selection"){
          if (el !='all'){
            let  players_List = this.listOfPlayers .filter(function (ele) {
            return ele.role == el &&  team  == ele.team 
            });       
              this.getplayers(players_List)
            }else{
              let  players_List_all = this.listOfPlayers .filter(function (ele) {
                return  team  == ele.team
                });       
              this.getplayers(players_List_all)
            }
        }     
      }
  }
    //Display as per selected team
  displayByTeam(el) {
    let activeTab = this.getActiveTab();
    if (this.selectedTeam.length > 0) {
        let team_code = el.value[0].code;
        if (activeTab != "all") {
            let players_List = this.listOfPlayers.filter(function(ele) {
                return ele.team == team_code && activeTab == ele.role
            });
            this.getplayers(players_List);
        } else {
            let players_List_f_all = this.listOfPlayers.filter(function(ele) {
                return ele.team == team_code
            });
            this.getplayers(players_List_f_all);
        }
    } else {
        this.activeRole = activeTab;
        this.teamSelected = false;
        this.showRole(activeTab);
    }
  }  
  //On change event handler for player sorting
  //need to optimize below code
  sortingChangeFn(e){
    let activeTab = this.getActiveTab();
    let selected_team =(this.selectedTeam.length >0) ? this.selectedTeam[0].code : null ;   
      if( typeof selected_team !== 'object') {
      if (activeTab != "all") {
          let players_List = this.listOfPlayers.filter(function(ele) {
              return ele.team == selected_team && activeTab == ele.role
          });
          this.getplayers(players_List);
      } else {
          let players_List_f_all = this.listOfPlayers.filter(function(ele) {
              return ele.team == selected_team
      });
          this.getplayers(players_List_f_all);
      }
    } else {
      this.activeRole = activeTab;
      this.teamSelected = false;
      this.showRole(activeTab);
    }
  }
  sortedBy(lists: any, code: any): any {
    var sortDesc = false;
    if(this.sortOption.length){      
      lists.sort((a,b)=>{
        var isString = typeof a[this.sortOption[0].code] === 'string';  
        var aProp = isString ? a[this.sortOption[0].code].toLowerCase() : a[this.sortOption[0].code];
        var bProp = isString ? b[this.sortOption[0].code].toLowerCase() : b[this.sortOption[0].code];    
        var sortDir = sortDesc ? 1 : -1;
        return ((aProp < bProp) ? sortDir : ((aProp > bProp) ? -sortDir : 0));
      });
    }   
  }
  theadSortFn(lists: any,sortDir,code): any {    
    lists.sort((a,b)=>{
      var isString = typeof a[code] === 'string';  
      var aProp = isString ? a[code].toLowerCase() : a[code];
      var bProp = isString ? b[code].toLowerCase() : b[code];    
      let direction = sortDir ? 1 : -1;
      return ((aProp < bProp) ? direction : ((aProp > bProp) ? - direction : 0));
    });
  }
  sort(a){
  this.thead_sort =true;
  this.isDesc = !this.isDesc; //change the direction 
  this.theadSortFn(this.myPlayersList,this.isDesc,a);
    
  }
  
}