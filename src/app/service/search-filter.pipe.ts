import { Pipe, PipeTransform } from '@angular/core';
import { StudentModel } from '../store/student/student.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: StudentModel[], searchText: string): any[] {
    if (searchText === '') return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.firstName.toLowerCase().includes(searchText) || it.lastName.toLowerCase().includes(searchText)
    });
  }
}
