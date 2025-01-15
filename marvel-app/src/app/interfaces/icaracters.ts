export interface MarvelApiResponse {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: MarvelData;
    etag: string;
  }
  
  export interface MarvelData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  }
  
  export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    events: Events;
    series: Series;
  }
  
  export interface Url {
    type: string;
    url: string;
  }
  
  export interface Thumbnail {
    path: string;
    extension: string;
  }
  
  export interface Comics {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  }
  
  export interface ComicItem {
    resourceURI: string;
    name: string;
  }
  
  export interface Stories {
    available: number;
    returned: number;
    collectionURI: string;
    items: StoryItem[];
  }
  
  export interface StoryItem {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  export interface Events {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventItem[];
  }
  
  export interface EventItem {
    resourceURI: string;
    name: string;
  }
  
  export interface Series {
    available: number;
    returned: number;
    collectionURI: string;
    items: SeriesItem[];
  }
  
  export interface SeriesItem {
    resourceURI: string;
    name: string;
  }
  