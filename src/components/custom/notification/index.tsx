import React from "react";
import { ReactComponent as Close } from '../../../assets/svg/close.svg';



const Notification = () => {
    return <div className="notification">
        <div className='notification__container'>
            <div className="notification__msg"><h3 className="notification__text">Item added to cart successfully</h3></div>
            <div>
                <Close />
            </div>
        </div>
    </div>
}

export { Notification }