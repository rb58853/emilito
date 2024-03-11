import BagWithProductsFirst from "./firstView/view"
import BagSecondView from "./secondView/view"

function BagWithProducts({ step }) {
    return step == 1 ? BagWithProductsFirst() : step == 2 ? BagSecondView() : null
}
export default BagWithProducts