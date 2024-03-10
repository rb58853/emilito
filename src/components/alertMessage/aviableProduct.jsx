import { useSelector } from "react-redux"
import "./style/desktop.css"

function AlertMessage() {
    const product = useSelector((state) => state.aviableAlert).product
    const isAlert = useSelector((state) => state.aviableAlert).alert

    return <text
        className={`alert-not-aviable-message ${isAlert ? '' : 'hide'}`}
    >
        {` ${product ? `You cannot buy more than ${product.aviables}  units of the product ${product.name}` : ""}`}
    </text>
}

export default AlertMessage