import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils/index';

const url = '/products'

export const loader = async () => {
  const res = await customFetch.get(url);
  const products = res.data.data
  return { products }
}

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  )
}

export default Landing
