import { Pipe, PipeTransform, Inject } from '@angular/core';
import { IMAGE_BASE_URL } from 'src/app/app-config';

@Pipe({
  name: 'imageBaseUrl'
})
export class ImageBaseUrlPipe implements PipeTransform {

  constructor(@Inject(IMAGE_BASE_URL) private imageBaseUrl: string) {
  }
  transform(value: any, args?: any): any {
    return this.imageBaseUrl + '/' + value;
  }

}
