import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'searchfilter'

})

export class searchInList implements PipeTransform{
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        console.log(items);
    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it.name.toLowerCase().includes(searchText);
        });
       }


}