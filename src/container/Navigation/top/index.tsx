import React, { ReactElement, FC } from 'react'
import { ReactComponent as Location } from '../../../assets/svg/location.svg'
import { ReactComponent as Orders } from '../../../assets/svg/order.svg'
import { ReactComponent as Cart } from '../../../assets/svg/cart.svg'
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../redux/store'
import { filterProduct } from '../../../redux/product/action'
type IProps = {

}

const TopNavigationBar: FC<IProps> = (): ReactElement => {
    return <div className="nav">
        <FilterComponent />
        <OrderComponent />
        <CartComponent />
    </div>
}


export { TopNavigationBar };


const FilterComponent: FC = (): ReactElement => {
    const dispatch = useDispatch()
    return <div className="nav__item">
        <span className="nav__icon">
            <Location />
        </span>
        <select className="nav__select" onChange={(e) => dispatch(filterProduct(e.target.value))}>
            <option></option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Ogun</option>
            <option>Kaduna</option>
            <option>Enugu</option>
            <option>Abia</option>
        </select>
    </div>
}


const OrderComponent = (): ReactElement => {
    return <div className="nav__item">
        <span className="nav__icon">
            <Orders />
        </span>

        <span className="nav__text">
            My orders
    </span>

    </div>
}

type CartProps = {
    text?: boolean;
}
export const CartComponent: FC<CartProps> = ({ text }): ReactElement => {
    let history = useHistory()
    const { cartItems }: { cartItems: any[] } = useSelector((state: RootState) => state?.cart)

    return <div className="nav__item" onClick={() => history.push('/cart')}>
        <span className="nav__icon--cart">
            <div className="cart">
                <span className="cart__count">{cartItems.length}</span>
            </div>
            <Cart />
        </span>
        {text && <span className="nav__text">
            Cart
    </span>}

    </div>
}