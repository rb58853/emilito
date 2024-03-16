import { SetAddress, SetApartamentNumber, SetCountry, SetEmail, SetLastName, SetName, SetPostalCode, SetState, SetCity, GetUser } from '../../../../../store/user/functions'
import { SetPersistentDataFromKey } from '../../../../../store/user/persistentData'
import './style/desktop.css'
import './style/mobile.css'
import { useDispatch, useSelector } from 'react-redux'


function Information() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    GetUser();

    return (
        <div className='information'>
            <div className='email-space'>
                <h4 className='header-in-info'>
                    Email address
                </h4>
                <input
                    value={user.email}
                    className='input-info'
                    type="text"
                    onInput={(x) => {
                        SetPersistentDataFromKey(x.target.value, 'email');
                        SetEmail(dispatch);
                    }
                    }
                />
            </div>

            <div className='shipping-space'>
                <h4 className='header-in-info'>
                    Shipping address
                </h4>
                <div className='shipping-row'>
                    <div className='input-space'>
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

                <div className='shipping-row'>
                    <div className='input-space'>
                        <text>
                            First name
                        </text>
                        <input
                            className='input-info'
                            type="text"

                            value={user.name}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'name');
                                SetName(dispatch);
                            }}
                        />
                    </div>
                    <div className='input-space'>
                        <text>
                            Last name
                        </text>
                        <input
                            className='input-info'
                            type="text"

                            value={user.last_name}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'last_name');
                                SetLastName(dispatch);
                            }}
                        />
                    </div>
                </div>
                <div className='shipping-row'>
                    <div className='input-space'>
                        <text>
                            Address
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            value={user.address}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'address');
                                SetAddress(dispatch);
                            }}
                        />
                    </div>
                    <div className='input-space'>
                        <text>
                            Apartament number (optional)
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            value={user.apartament_number}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'apartament_number');
                                SetApartamentNumber(dispatch);
                            }}
                        />
                    </div>
                </div>
                <div className='shipping-row'>
                    <div className='input-space'>
                        <text>
                            City
                        </text>
                        <input
                            className='input-info'
                            type="text"

                            value={user.city}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'city');
                                SetCity(dispatch);
                            }}
                        />
                    </div>
                    <div className='input-space'>
                        <text>
                            State/Province
                        </text>
                        <input
                            className='input-info'
                            type="text"
                            value={user.satate}
                            onInput={(x) => {
                                SetPersistentDataFromKey(x.target.value, 'state');
                                SetState(dispatch);
                            }}
                        />
                    </div>

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

                </div>
            </div>
        </div>
    )
}
export default Information