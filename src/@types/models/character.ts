import { Comic } from "./comic";
import { Series } from "./series";
import { Story } from "./story";
import { Thumbnail } from "./thumbnail";
import { Url } from "./url";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Comic[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
  };
  urls: Url[];
}
