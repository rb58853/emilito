import { useSelector } from "react-redux"
import "./style/desktop.css"

function AlertMessage() {
    const product = useSelector((state) => state.aviableAlert).product
    const isAlert = useSelector((state) => state.aviableAlert).alert

    return <text
        className={`alert-not-aviable-message ${isAlert ? '' : 'hide'}`}
    >
        {` ${product ? "No puedes comprar mas del producto " + product.name : ""}`}
    </text>
}

export default AlertMessage