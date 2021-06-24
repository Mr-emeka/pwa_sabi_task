import React from 'react'
import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg'
import { useDispatch } from 'react-redux'

import { searchProduct } from '../../../redux/product/action'


const SearchInput = () => {

    const dispatch = useDispatch()

    return <div className="search">
        <div className="search__wrapper" id="input-field">
            <input
                placeholder="Search merchbuy"
                className="search__input" onChange={(e) => dispatch(searchProduct(e.target.value))} />
            <SearchIcon className="search__icon" />
        </div>
    </div>
}

export { SearchInput };