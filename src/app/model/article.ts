import {Category} from './category';

class FeaturedAttributes {
  priority: number;
  bgImage: string;
}

export class Article {
  id: number;
  title: string;
  alias: string;
  category: Category[];
  shorttext: string;
  fulltext: string;
  createdBy: string;
  published: boolean;
  image: string;
  language: string;
  featuredAttributes: FeaturedAttributes;
}
