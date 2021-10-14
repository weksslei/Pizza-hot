export interface Offers  {
  id: number;
  title:string;
  description: string;
  price: number;
  feature: number;
  ad: string;
  images: Url[]
}

interface Url {
  url: string
}
