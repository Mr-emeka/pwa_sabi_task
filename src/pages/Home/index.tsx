import React, { FC, ReactElement } from 'react'
import { MainLayout } from '../../components/layout';
import { SearchInput } from '../../components/common'
import { ReactComponent as ProductCategory } from '../../assets/svg/product_category.svg';
import { ReactComponent as Shop } from '../../assets/svg/shop.svg';
import { ReactComponent as Recommended } from '../../assets/svg/recommended.svg';
import { ReactComponent as Fire } from '../../assets/svg/fire.svg';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'
import { priceFormatter } from '../../helpers'
import { Button } from '../../components/common'

const Home = (): ReactElement => {
    return <MainLayout>
        <section className="buy">

            <SearchInput />
            {/*  */}
            <Carousel />
            <QuickLinks />
            {/*  */}
            <ProductListing />
        </section>
    </MainLayout>
}

export default Home;



const Carousel = () => {
    return <div className='carousel'>
        <div className="carousel__card">
        <div className="carousel__content">
                <h4>Troll basket  <span className="carousel__text--orange"> store</span>help you today with your order your order</h4>
            </div>
        </div>
        <div className="carousel__card">
            <div className="carousel__content">
                <h4>Have any <span className="carousel__text--orange"> issues</span>with your order</h4>
                <Button text='Contact Us' style={{
                    textTransform: "capitalize",
                    fontSize: '10px',
                    letterSpacing: "2px",
                    background: '#227EFF',
                    borderRadius: "4px",
                    color: "#fff",
                    border: "none",
                    minWidth: '91px',
                    outline: "none",
                    lineHeight: '21px',
                }} />
            </div>
        </div>
        <div className="carousel__card">
            <div className="carousel__content">
                <h4>Track <span className="carousel__text--green"> orders</span>with Ease</h4>
                <Button text='Orders' style={{
                    textTransform: "capitalize",
                    fontSize: '10px',
                    letterSpacing: "2px",
                    background: '#ffff',
                    borderRadius: "4px",
                    color: "#EE6F44",
                    border: "none",
                    minWidth: '91px',
                    outline: "none",
                    lineHeight: '21px',
                }} />
            </div>
        </div>
    </div>
}
const QuickLinks = () => {
    return <div className="quick__links">
        <div>
            <div className="quick__links--product">
                <ProductCategory />
            </div>
            <p>Product Categories</p>
        </div>
        <div>
            <div className="quick__links--popular">
                <Fire />
            </div>
            <p>Popular Products</p>

        </div>
        <div>
            <div className="quick__links--recommended">
                <Recommended />
            </div>
            <p>Recommended Products</p>

        </div>
        <div>
            <div className="quick__links--shop">
                <Shop />
            </div>
            <p>Shops</p>
        </div>
    </div>
}

const ProductListing = () => {
    const { items, searchTerm, filterBy }: { items: any[], searchTerm: string, filterBy: string } = useSelector((state: RootState) => state?.product)


    const handleFilterAndSort = () => {
        return items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())).filter((item) => item.location.toLowerCase().includes(filterBy.toLowerCase()));
    }
    return <ProductCard products={handleFilterAndSort()} />
}

export type ProductProps = {
    products: any[]
}

export const ProductCard: FC<ProductProps> = ({ products }) => {
    return <div className="products">
        <div className="products__grid">
            {products.map((product, index) => {
                return <div className="product__card" key={index}>
                    <Link to={`/product/${product.id}`}>
                        <img className="product__img" loading="lazy" src={product.image} alt={`${product.name}`} />
                        <div className="product__details">
                            <p className="product__description">{product.description}</p>
                            <h2 className="product__price">{priceFormatter(product.price)}</h2>
                            <p className="product__qty">MOQ {product.stock} {product.stock > 1 ? '(pieces)' : '(piece)'}</p>
                        </div>

                    </Link>
                </div>
            })}
        </div>

    </div>
}