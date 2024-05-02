import axios from 'axios';

const base = axios.create({
  baseURL: 'https://docs.google.com/forms/d/e/1FAIpQLSdf7rEo4Ofzr_71jiks7xNbcBqtV9ynCaQ_i7hZpFXPRA0l_A/formResponse'
});

export const sendProducts = async (data: ProductProps) => {
  const bodyFormData = new FormData();
  bodyFormData.append('entry.1485978671', data.business);
  bodyFormData.append('entry.795126901', data.code);
  bodyFormData.append('entry.192754056', data.name);
  bodyFormData.append('entry.1587142754', data.products);
  bodyFormData.append('entry.1149661235', data.quantity);

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