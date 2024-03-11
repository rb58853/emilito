import './style/desktop.css'

function BagSecondView() {
    return (
        <section className='bag-details'>
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
                </div>

            </div>
        </section>
    )
}
export default BagSecondView