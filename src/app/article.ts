class FeaturedAttributes {
  priority: number;
  bgImage: string;
}

export class Article {
  title: string;
  alias: string;
  shorttext: string;
  fulltext: string;
  created: string;
  category: string;
  featuredAttributes: FeaturedAttributes;
}
