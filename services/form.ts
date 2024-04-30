import axios from 'axios';

const base = axios.create({
  baseURL: 'https://docs.google.com/forms/d/e/1FAIpQLSeZJ9p1G_f-Zq6zuKLRBlgRAEtwZYjdt6fyOdGI9Rx96Xi9qw/formResponse'
});

export const sendProducts = async (data: ProductProps) => {
  const bodyFormData = new FormData();
  bodyFormData.append('entry.1763876441', 'Negocio');
  bodyFormData.append('entry.805487062', 'Codigo de Cliente');
  bodyFormData.append('entry.1527765944', 'Nombre de Cliente');
  bodyFormData.append('entry.818659534', 'Productos');
  bodyFormData.append('entry.1737733736', '119');

  await base({
    method: 'POST',
    url: '',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: bodyFormData
  })
  .then((response) => console.log('response'))
  .catch(() => console.log('error'))
}

type ProductProps = {
  business: string;
  code: string;
  name: string;
  products: string;
  quantity: string;
}