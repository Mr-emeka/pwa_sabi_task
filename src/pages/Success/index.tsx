import React from 'react'
import { ReactComponent as SuccessIcon } from '../../assets/svg/success.svg'
import { Button } from '../../components/common'
import { useHistory } from 'react-router-dom'

const Success = () => {
    const history = useHistory()
    return <div className="success">
        <div>
            <div className="success__iconArea">

                <SuccessIcon />
                <h3>Checkout Successful</h3>
                <p>Your checkout is now successful.
</p>
            </div>
            <div className="success__ctaArea">
                <Button text="Got It" handleClick={() => history.push('/')} style={{
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    fontWeight: '500',
                    height: '56px',
                    fontSize: '16px',
                    lineHeight: ' 24px',
                    textAlign: 'center',
                    color: '#227EFF',
                    border: 'none',
                    width: '100%',
                    background: '#ffffff'
                }}>

                </Button>
            </div>
        </div>

    </div>
}
export default Success;