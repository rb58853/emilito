import products from "../../data/static_products"

export function BagIsEmpty() {
    let bag_ = localStorage.getItem("bag");
    let bag = bag_ ? JSON.parse(bag_) : {};
    // return bag
    return (!bag || Object.keys(bag).length === 0)
}
export function ProductCount(product) {
    let bag_ = localStorage.getItem("bag");
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (bag && product.key in bag)
        return bag[product.key]
    else
        return "0"
}
/** 
 @param {Dictionary} product  
 @info devuelve si el producto esta al maximo de su capacidad o mayor que esta.
*/
export function FullCount(product) {
    let bag_ = localStorage.getItem("bag");
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (bag && product.key in bag)
        return parseInt(bag[product.key], 10) >= parseInt(products[product.key]["aviables"], 10)
    else
        return false
}

export function BagProducts() {
    // let bag = JSON.parse(localStorage.getItem("bag"))
    let bag_ = localStorage.getItem("bag");
    let bag = bag_ ? JSON.parse(bag_) : {};

    let result = {}

    Object.keys(bag).forEach(key => {
        result[key] = {
            "product": products[key],
            "count": bag[key],
        }
    });
    return result;
}

export function CleanBag() {
    localStorage.setItem('bag', JSON.stringify({}))
    // localStorage.setItem('bag', null)
}

export function BagPushCount(item, count) {
    let bag_ = localStorage.getItem("bag")
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (count == "" || count == "0")
        delete bag[item.key]
    else
        bag[item.key] = count;
    localStorage.setItem('bag', JSON.stringify(bag))
}

export function BagPush(item, setCount = null) {
    let bag_ = localStorage.getItem("bag")
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (bag && item.key in bag) {
        bag[item.key] = (parseInt(bag[item.key], 10) + 1).toString();
    }
    else {
        if (!bag)
            bag = {}
        bag[item.key] = "1";
    }
    localStorage.setItem('bag', JSON.stringify(bag))
    return true
}

export function BagPop(item) {
    let bag = JSON.parse(localStorage.getItem("bag"))
    let key = item.key

    if (bag && key in bag) {
        if (parseInt(bag[key], 10) > 1) {
            bag[key] = (parseInt(bag[key], 10) - 1).toString();
        }
        else {
            delete bag[key];
        }
    }

    localStorage.setItem('bag', JSON.stringify(bag))
}

