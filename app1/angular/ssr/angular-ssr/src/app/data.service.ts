import { 
    Injectable, 
    TransferState, 
    inject, 
    makeStateKey 
} from '@angular/core';
  
type PageLoad = Awaited<ReturnType<typeof pageServerLoad>>;
  
  // Abstract
@Injectable()
export abstract class DataService {
    abstract value: PageLoad | null;
    abstract load(): Promise<void>;
}

// Server
@Injectable()
export class DataServiceServer extends DataService {
    state = inject(TransferState);
    value: PageLoad | null = null;
    async load() {
        const data = await pageServerLoad();
        this.state.set(makeStateKey<PageLoad>(key), data);
        this.value = data;
    }
}

// Browser
@Injectable()
export class DataServiceBrowser extends DataService {
    state = inject(TransferState);
    value: PageLoad | null = null;
    async load() {
        const data = this.state.get(makeStateKey<PageLoad>(key), null);
        this.value = data;
    }
}

// Config
const key = 'test';

async function pageServerLoad() {
    try {
        const response = await fetch('https://api.sampleapis.com/codingresources/codingResources'); // Replace with the actual API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data; // Parse and set the data
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors
        return;
      }
}