import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadFlowbite(callback: (flowbite: any) => void): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(module => {
        callback(module);
      }).catch(error => {
        console.error('Error loading Flowbite module:', error);
        callback(null);
      });
    } else {
      callback(null);
    }
  }
}
