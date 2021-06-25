import React, { FC } from "react";
import { ReactComponent as Close } from '../../../assets/svg/close.svg';

type IProps = {
    closeNotification: Function
}

const Notification: FC<IProps> = ({ closeNotification }) => {
    return <div className="notification">
        <div className='notification__container'>
            <div className="notification__msg"><h3 className="notification__text">Item added to cart successfully</h3></div>
            <div>
                <Close onClick={() => closeNotification()} />
            </div>
        </div>
    </div>
}

export { Notification }