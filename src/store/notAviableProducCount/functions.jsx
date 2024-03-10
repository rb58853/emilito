import { setAlert, setProduct } from './aviableAlertSlice';


export function SetProductAlert(dispatch, product) {
    dispatch(setProduct(product));
}

export function SetAlert(dispatch) {
    dispatch(setAlert(true))
}
export function UnSetAlert(dispatch) {
    dispatch(setAlert(false))
}
