import './style/desktop.css'
import './style/mobile.css'

function Information() {
    return (
            <div className='information'>
                <div className='email-space'>
                    <h4 className='header-in-info'>
                        Email address
                    </h4>
                    <input
                        className='input-info'
                        type="text"
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
                            />
                        </div>
                        <div className='input-space'>
                            <text>
                                Last name
                            </text>
                            <input
                                className='input-info'
                                type="text"
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
                            />
                        </div>
                        <div className='input-space'>
                            <text>
                                Apartament number, suite, etc (optional)
                            </text>
                            <input
                                className='input-info'
                                type="text"
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
                            />
                        </div>
                        <div className='input-space'>
                            <text>
                                State/Province
                            </text>
                            <input
                                className='input-info'
                                type="text"
                            />
                        </div>

                        <div className='input-space'>
                            <text>
                                Postal code
                            </text>
                            <input
                                className='input-info'
                                type="text"
                            />
                        </div>

                    </div>
                </div>
            </div>
    )
}
export default Information