export type PageRoute = 
  | 'home'
  | 'konten-laundry'
  | 'gmb-laundry'
  | 'kost-wanita'
  | 'toko-kue'
  | 'meta-ads'
  | 'alatan';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  route?: PageRoute;
  externalLink?: string;
  image: string;
  tags?: string[];
  actionLabel?: string;
}
