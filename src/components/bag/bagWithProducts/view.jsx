import BagWithProductsFirst from "./firstView/view"
import BagSecondView from "./secondView/view"
import PaymentBagView from "./thirdView/view"

function BagWithProducts({ step }) {
    return step == 1 ? <BagWithProductsFirst /> : step == 2 ? <BagSecondView /> : <PaymentBagView/>
}
export default BagWithProducts