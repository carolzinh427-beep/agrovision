export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'antenas' | 'monitores' | 'piloto' | 'sensores' | 'pecas' | 'outro';
  categoryLabel: string;
  brand: string;
  model: string;
  mainImage: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  specifications: ProductSpec[];
  applications: string[];
  price: string | null; // e.g. "Consulte condições" or "R$ X.XXX,XX"
  promoPrice?: string | null;
  availability: 'Disponível' | 'Sob Consulta' | 'Sob Encomenda';
  featured: boolean;
  status: 'ativo' | 'inativo';
}

export interface SolutionItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
