import { getUrl } from "../../settings.js";
import { handleHttpErrors } from "../../utils.js";

export function initCar() {
    document.querySelector("#single-car-submit").addEventListener("click", () => {
        const carIdToFind = document.querySelector("#single-car-value").value;
        getSingleCar(carIdToFind);
    });
}

export async function getSingleCar(id) {
    const car = await fetch(getUrl() + id).then(handleHttpErrors);
    showCar(car);
}

function showCar(car) {
    document.querySelector("#id").innerText = car.id;
    document.querySelector("#brand").innerText = car.brand;
    document.querySelector("#model").innerText = car.model;
    document.querySelector("#price").innerText = car.pricePrDay;
}
