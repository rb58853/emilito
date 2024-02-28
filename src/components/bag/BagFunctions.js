import products from "../../data/static_products"

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
        "p1": "1",
        'p2': '2',
        "p3": "1",
        'p4': '2',
        "p5": "1",
        'p6': '2',
        "p7": "1",
        'p8': '2',
    }
    localStorage.setItem('bag', JSON.stringify(bag))
}

export function BagPush(item) {
    let bag_ = localStorage.getItem("bag")
    let bag = bag_ ? JSON.parse(bag_) : {};

    if (item.key in bag) {
        bag[item.key] = (parseInt(bag[item.key], 10) + 1).toString();
    }
    else {
        bag[item.key] = "1";
    }
    localStorage.setItem('bag', JSON.stringify(bag))
}

export function BagPop(item) {
    let bag = JSON.parse(localStorage.getItem("bag"))
    let key = item.key
    if (key in bag) {
        if (parseInt(bag[key], 10) > 1) {
            bag[key] = (parseInt(bag[key], 10) - 1).toString();
        }
        else {
            delete bag.key
        }
    }

    localStorage.setItem('bag', JSON.stringify(bag))
    return item
}

