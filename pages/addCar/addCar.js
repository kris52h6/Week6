import { getUrl } from "../../settings.js";
import { makeOptions } from "../../utils.js";
import { handleHttpErrors } from "../../utils.js";

export function initAddCar() {
    document.querySelector("#submit").addEventListener("mouseup", () => {
        postCar();
    });
}

async function postCar() {
    const car = {
        brand: document.querySelector("#brand").value,
        model: document.querySelector("#model").value,
        pricePrDay: document.querySelector("#price").value,
        bestDiscount: document.querySelector("#discount").value,
    };

    const options = makeOptions("POST", car);
    fetch(getUrl(), options).then(handleHttpErrors);
}
