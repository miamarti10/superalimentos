import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let foodFilter = [];
    for(let  food of value ){
      if(food.name.toLowerCase().indexOf(arg.toLowerCase())> -1){
        foodFilter.push(food);
      }
    }
    return foodFilter;
  }

}
