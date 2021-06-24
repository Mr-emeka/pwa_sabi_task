import React, { ReactElement, FC, useState, useEffect } from 'react'

import { ProductViewLayout } from '../../components/layout'
import { Notification } from '../../components/custom/'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevron_right.svg'

import avatar from '../../assets/img/avatar.png';
import { Button, StarRating } from '../../components/common';

import { Link, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'

import { asyncAddItem } from '../../redux/cart/action'
import { priceFormatter } from '../../helpers'

type IProps = {
    match: any;
}


const ProductDetails: FC<IProps> = ({ match }): ReactElement => {
    const productId = match.params.id
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        image: ''
    })
    const data: any = useSelector((state: RootState) => state?.product?.items.find((item: { id: string; }) => item.id === productId))
    const history = useHistory()

    useEffect(() => {
        if (data) {
            setProduct(data)
            return
        }
        history.push('/')
    }, [data, history])

    return <ProductViewLayout displayAction={true} name="Details">
        <div>
            <div className="productView__img">
                <img src={product.image} alt="test" loading="lazy" />
            </div>
            <div className="productView__details">
                <h1 className="productView__title">
                    {product?.name}
                </h1>
                <p className="productView__description">{product.description} </p>
                <div className="productView__priceArea">
                    <h5 className="productView__price">{priceFormatter(product.price)}</h5>
                    <span className="productView__piece">/Piece</span>
                </div>
            </div>
            <div className="descriptionTab">
                <h4 className="descriptionTab__header"> Product Description</h4>
                <ChevronRight />
            </div>
            <Review />

        </div>
        <ActionBottomNav item={data} productId={productId} />
        <Notification />
    </ProductViewLayout>
}


export default ProductDetails;


const Review = () => {
    return <div>
        <div className="review">
            <div className="review__heading">
                <h5 className="review__header">Review and Ratings</h5>
                <Link to="">View All </Link>
            </div>
            <div className="review__rating">
                <div><StarRating rating={6} /></div>
                <h4 >3.0</h4>
            </div>
            <div>
                <p className="review__text">This is the best product I have used in a long while and the
size fits perfectly and I love the colors!!!!!</p>
            </div>
            <div className="review__profile">
                <img src={avatar} alt="" loading="lazy" />
                <h3>Segun Arinze</h3>
            </div>
        </div>


    </div>
}


const ActionBottomNav = ({ item, productId }: { item: any[], productId: string }) => {
    const dispatch = useDispatch()
    const { cartItems }: { cartItems: any[] } = useSelector((state: RootState) => state?.cart)

    const added = cartItems.find((cartItem) => cartItem.id === productId)
    let currentText = added ? 'Added to cart' : "Add to cart";

    return <div className="review__actionArea">
        <Button text={currentText} handleClick={() => dispatch(asyncAddItem(item))} style={{
            textTransform: "capitalize",
            fontSize: '14px',
            letterSpacing: "2px",
            background: '#227EFF',
            borderRadius: "4px",
            color: "#fff",
            border: "none",
            outline: "none",
            lineHeight: '21px',
        }} />
        <Button text="Wishlist" style={{
            border: '1px solid #A0B1C0',
            boxSizing: 'border-box',
            borderRadius: '4px',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: ' 21px',
            textAlign: 'center',
            color: '#2E4457'
        }} />
    </div>
}