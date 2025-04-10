export interface Game {
  id: string;
  gameName: string;
  gamePoster:string;
  company:string;
  category: { _id: string; name: string };
  description: string;
  price:number;
  originalPrice:number;
  rating: number;
  tags: string[];
  trailer: string;
  releaseYear:number;
  discount:number;
  }
