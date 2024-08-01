import axios from 'axios';

const base = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_BASE_URL
});

export const getProducts = async (): Promise<ProductProps[]> => {
  const { data } = await base.get('/products');
  return data;
}

export type ProductProps = {
  business: string;
  id: number;
  image: string;
  name: string;
  points: number;
  unit: string;
  value?: number;
  available?: number;
}