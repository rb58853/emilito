import './style/desktop.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetUser } from '../../../../../store/user/functions'

function InformationPayment() {
    GetUser()    
    const user = useSelector((state) => state.user)

    return (
        < div className="info-payment" >
            <div className="info-payment-get">
                <div className="info-payment-row-space">
                    <h4>Email address</h4>

                    <div className='info-payment-row'>
                        {user.email}
                        <hr className='line-payment-row' />
                        <Link className='link-edit'
                        to = '/bag-details'> edit </Link>
                    </div>
                </div>
            </div>
            <div className="info-payment-set">
            </div>
        </div>
    )
}
export default InformationPayment