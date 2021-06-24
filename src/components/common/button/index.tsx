import React, { FC, ReactElement } from 'react';


type IProps = {
    text: string;
    style?: any;
    handleClick?: () => void;
}
const Button: FC<IProps> = ({ text, style, handleClick }): ReactElement => {
    return <button style={{ ...style }} onClick={handleClick} >{text}</button>
}

export { Button }