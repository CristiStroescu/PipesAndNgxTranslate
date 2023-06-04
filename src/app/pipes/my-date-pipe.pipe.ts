import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDatePipe',
})
export class MyDatePipePipe implements PipeTransform {
  transform(value: string): any {
    if(!value.length) return null;

    let date = new Date(value);
    if(isNaN(date.getTime()))
      return null;

    let year: string = value.slice(0, 4);
    let month: string = value.slice(5, 7);
    let day: string = value.slice(8);
    let nameOFtheMonth: string = '';
    switch (month) {
      case '01':
        nameOFtheMonth='January';
        break;
      case '02':
        nameOFtheMonth='February';
        break;
      case '03':
        nameOFtheMonth='March';
        break;
      case '04':
        nameOFtheMonth='April';
        break;
      case '05':
        nameOFtheMonth='May';
        break;
      case '06':
        nameOFtheMonth='June';
        break;
      case '07':
        nameOFtheMonth='July';
        break;
      case '08':
        nameOFtheMonth='August';
        break;
      case '09':
        nameOFtheMonth='September';
        break;
      case '10':
        nameOFtheMonth='October';
        break;
      case '11':
        nameOFtheMonth='November';
        break;
      case '12':
        nameOFtheMonth='December';
        break;
      default:
        return null;
    }
    return nameOFtheMonth + ' ' + day + ', ' + year;
  }
}
