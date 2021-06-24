import React, { FC, ReactNode, ReactElement } from 'react'
import { CartComponent } from '../../container/Navigation/top'
import { ReactComponent as Search } from '../../assets/svg/search_lite.svg';
import { ReactComponent as ChevronLeft } from '../../assets/svg/chevron_left.svg'
import { useHistory } from 'react-router-dom'

type IProps = {
    children: ReactNode;
    displayAction?: boolean;
    name?: string
}

type NavProps = {
    name?: string;
    displayAction?: boolean;
}

const ProductViewLayout: FC<IProps> = ({ children, name, displayAction }): ReactElement => {
    return <div>
        <TopNav name={name} displayAction={displayAction} />
        <main>
            {children}
        </main>
    </div>
}


export { ProductViewLayout };


const TopNav: FC<NavProps> = ({ name, displayAction }) => {
    let history = useHistory();

    return <div className="productView__nav">
        <div className={`${displayAction ? '' : 'productView__full'}`}>
            <div className="nav__icon--back" onClick={() => history.goBack()}>
                <ChevronLeft />
            </div>
        </div>
        <div className={`${displayAction ? '' : 'productView__full'}`}>
            <p className="productView__text">
                {name}
            </p>
        </div>
        {displayAction && <div className="productView__action">

            <TopNavSearch />
            <CartComponent text={false} />
        </div>}

    </div>
}

const TopNavSearch = () => {
    return <div className="nav__item">
        <span className="nav__icon">
            <Search />
        </span>
    </div>
}