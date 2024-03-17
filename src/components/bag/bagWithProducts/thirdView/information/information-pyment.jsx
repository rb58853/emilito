import '../../secondView/information/style/desktop.css'
import './style/desktop.css'
import './style/mobile.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetUser, SetCountry, SetPostalCode } from '../../../../../store/user/functions'
import { useState } from 'react'
import { SetPersistentDataFromKey } from '../../../../../store/user/persistentData'

function InformationPayment() {
    const dispatch = useDispatch()
    GetUser()
    const user = useSelector((state) => state.user)
    const [payMethod, setPayMethod] = useState(0)

    return (
        < div className="info-payment" >
            <div className="info-payment-get">
                <div className="info-payment-row-space">
                    <h4>Email address</h4>

                    <div className='info-payment-row'>
                        {user.email}
                        <hr className='line-payment-row' />
                        <Link className='link-edit'
                            to='/bag-details'> Edit </Link>
                    </div>
                </div>
            </div>
            <div className="info-payment-row-space">
                <h4>Shipping address</h4>

                <div className='info-payment-row'>
                    <text>
                        {`${user.name} ${user.last_name} ${user.address} ${user.province} ${user.apartament_number}, ${user.country}`}
                    </text>
                    <hr className='line-payment-row' />
                    <Link className='link-edit'
                        to='/bag-details'> Edit </Link>
                </div>
            </div>
            <div className="info-payment-set">
                <h4>Payment information</h4>

                <div className='toggles-space'>
                    <label className='toggle-space'>
                        <input type="checkbox"
                            className='toggle'
                            checked={payMethod == 0}
                            onClick={() => { setPayMethod(0) }}
                        />
                        Toggle
                    </label>

                    <label className='toggle-space'>
                        <input type="checkbox"
                            className='toggle'
                            checked={payMethod == 1}
                            onClick={() => { setPayMethod(1) }}
                        />
                        Toggle
                    </label>
                </div>

                <div className='shipping-row'>
                    <div className='input-space card-number'>
                        <text>
                            Card number
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            placeholder='1234 1234 1234 1234'
                            onInput={(x) => {
                            }}
                        />
                    </div>
                    <div className='input-space'>
                        <text>
                            Expiration
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            placeholder='MM/YY'
                            onInput={(x) => {
                            }}
                        />
                    </div>

                    <div className='input-space'>
                        <text>
                            CVC
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            placeholder='CVC'
                            onInput={(x) => {
                            }}
                        />
                    </div>
                </div>
                <div className='shipping-row short'>
                    <div className='input-space'>
                        <text>
                            Postal code
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            value={user.postal_code}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'postal_code');
                                SetPostalCode(dispatch);
                            }}
                        />
                    </div>
                    <div className='input-space country'>
                        <text>
                            Country
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            value={user.country}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'country');
                                SetCountry(dispatch);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InformationPayment