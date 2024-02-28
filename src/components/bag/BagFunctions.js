import products from "../../data/static_products"

export function BagProducts(){
    let bag = JSON.parse(localStorage.getItem["bag"])
    let result = {}
    Object(bag).keys.forEach(key => {
        result[products[key]] = bag[key]
    });
    return result;
}

export function StartBag() {
    let bag = {}
    localStorage.setItem('bag', JSON.stringify(bag))
}

export function BagPush(item) {
    let bag = JSON.parse(localStorage.getItem["bag"])

    if (item in bag) {
        bag[item] = (parseInt(bag[item], 10) + 1).toString();
    }
    else {
        bag[item] = "1";
    }
    localStorage.setItem('bag', JSON.stringify(bag))
}

export function BagPop(item) {
    let bag = JSON.parse(localStorage.getItem["bag"])

    if (item in bag) {
        if (parseInt(bag[item], 10) > 1) {
            bag[item] = (parseInt(bag[item], 10) - 1).toString();
        }
        else
            delete bag.item
    }

    localStorage.setItem('bag', JSON.stringify(bag))
    return item
}

