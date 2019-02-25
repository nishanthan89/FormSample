import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class FilterdataPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[]{
  if(!items || !searchTerm)
  {
    return items;
  }
  return items.filter(search => (search.TaskDescription.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1) ||
  (search.TaskName.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1))
  }

}
