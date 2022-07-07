import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "dob"
})
export class DobPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return value;

    return moment().diff(value, "year") + "  Years";
  }
}
