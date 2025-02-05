import { ProductsGrid, SectionTitle } from './index'

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text={'featured products'} />
      <ProductsGrid />
    </div>
  )
}

export default FeaturedProducts
