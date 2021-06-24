import React, { FC } from 'react'
import { ProductViewLayout } from '../../components/layout'
import img from '../../assets/img/cocacola.png'
import { ReactComponent as Delete } from '../../assets/svg/Delete.svg'
import { ReactComponent as Plus } from '../../assets/svg/plus.svg'
import { ReactComponent as Minus } from '../../assets/svg/minus.svg'
import { Button } from '../../components/common'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { asyncClearItemFromCart, asyncReduceItemQty, asyncIncrementItemQty } from '../../redux/cart/action'
import { ProductCard } from '../Home'
import { calculateTotal, priceFormatter } from '../../helpers'
import { useHistory } from 'react-router-dom';


const Cart = () => {

    const dispatch = useDispatch()
    const { cartItems }: { cartItems: any[] } = useSelector((state: RootState) => state?.cart)
    const { items }: { items: any[] } = useSelector((state: RootState) => state?.product);
    const history = useHistory()


    return <ProductViewLayout displayAction={false} name="Carts">
        <div className="cartView">        {cartItems.length > 0 && cartItems.map((item, index) => {
            return <div className="cart__item" key={index}>
                <div className="cart__price">
                    <div>
                        <img src={item.image} alt="test" width="48px" loading="lazy"
                            height="48px" />
                    </div>
                    <div className="cart__preview">
                        <h2>{item.name}</h2>
                        <h3>{priceFormatter(item.price)}</h3>
                    </div>
                </div>
                <div className="product__controlArea">
                    <div className="product__delete" onClick={() => dispatch(asyncClearItemFromCart(item))}>
                        <Delete />
                        <h5>Delete</h5>
                    </div>
                    <Control qty={item.quantity} item={item} />

                </div>
            </div>
        })
        }
        </div>
        {cartItems.length > 0 && <div className="checkout">
            <div className="checkout__subTotal">
                <h4 className="header">Subtotal</h4>
                <h5>{priceFormatter(calculateTotal(cartItems))}</h5>
            </div>
            <div className="checkout__total">
                <h4 className="header">Total</h4>
                <h5>{priceFormatter(calculateTotal(cartItems))}</h5>
            </div>
            <Button text="Checkout" handleClick={() => history.push('/success')} style={{
                boxSizing: 'border-box',
                borderRadius: '4px',
                fontWeight: '500',
                height: '56px',
                fontSize: '16px',
                lineHeight: ' 24px',
                textAlign: 'center',
                color: '#ffffff',
                border: 'none',
                width: '100%',
                background: '#227EFF'
            }} />

        </div>}
        <div className="recent">
            <div className="recent__heading">
                <h5 className="recent__header">Recently Viewed</h5>
                <Link to="">View All </Link>
            </div>
            <ProductCard products={items} />
        </div>

    </ProductViewLayout>
}

export default Cart

type ControlProps = {
    qty: number,
    item: {}
}
const Control: FC<ControlProps> = ({ qty, item }) => {
    const dispatch = useDispatch()

    return <div className="product__controls">
        <Minus onClick={() => dispatch(asyncReduceItemQty(item))} />
        <h4 className="product__count">{qty}</h4>
        <Plus onClick={() => dispatch(asyncIncrementItemQty(item))} />
    </div>
}