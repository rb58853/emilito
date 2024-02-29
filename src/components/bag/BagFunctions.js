import products from "../../data/static_products"

export function ProductCount(product) {
    let bag_ = localStorage.getItem("bag");
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (product.key in bag)
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

    if (product.key in bag)
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

export function StartBag() {
    let bag = {
        "p1": "4",
        'p2': '2',
        "p3": "1",
        'p4': '2',
        "p5": "1",
        'p6': '2',
        "p7": "1",
        'p8': '2',
    }

    localStorage.setItem('bag', JSON.stringify({}))
}

export function BagPushCount(item, count) {
    let bag_ = localStorage.getItem("bag")
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (count == "")
        delete bag[item.key]
    else
        bag[item.key] = count;
    localStorage.setItem('bag', JSON.stringify(bag))
}

export function BagPush(item, setCount = null) {
    let bag_ = localStorage.getItem("bag")
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (item.key in bag) {
        bag[item.key] = (parseInt(bag[item.key], 10) + 1).toString();
    }
    else {
        bag[item.key] = "1";
    }
    localStorage.setItem('bag', JSON.stringify(bag))
    return true
}

export function BagPop(item) {
    let bag = JSON.parse(localStorage.getItem("bag"))
    let key = item.key
    if (key in bag) {
        if (parseInt(bag[key], 10) > 1) {
            bag[key] = (parseInt(bag[key], 10) - 1).toString();
        }
        else {
            delete bag[key];
        }
    }

    localStorage.setItem('bag', JSON.stringify(bag))
}

