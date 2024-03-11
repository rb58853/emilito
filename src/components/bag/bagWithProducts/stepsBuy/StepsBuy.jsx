import "./StepsBuy.css"
import "./mobile.css"
function StepsBuy({ step = 0 }) {
    return (<div className='steps_buy'>
        <div className='full_step_buy'>
            <div className='step_buy'>
                <img className='step_buy_image' src="images/icons/White_Circle.png" alt="" />
                {step == 0 && <img className='step_buy_active' src="images/icons/red.png" alt="" />}
            </div>
            <p className='step_text'>
                Cart
            </p>
        </div>

        <hr className='black_line' />

        <div className='full_step_buy'>
            <div className='step_buy'>
                <img className='step_buy_image' src="images/icons/White_Circle.png" alt="" />
                {step == 1 && <img className='step_buy_active' src="images/icons/red.png" alt="" />}
            </div>
            <p className='step_text'>
                Details
            </p>
        </div>

        <hr className='black_line' />

        <div className='full_step_buy'>
            <div className='step_buy'>
                <img className='step_buy_image' src="images/icons/White_Circle.png" alt="" />
                {step == 2 && <img className='step_buy_active' src="images/icons/red.png" alt="" />}
            </div>
            <p className='step_text'>
                Payment
            </p>
        </div>
    </div>
    )
}
export default StepsBuy