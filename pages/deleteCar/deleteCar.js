import { getUrl } from "../../settings.js";
import { makeOptions } from "../../utils.js";
import { handleHttpErrors } from "../../utils.js";

export function initDeleteCar() {
    document.querySelector("#submit").addEventListener("mouseup", () => {
        deleteCar();
    });
}

async function deleteCar() {
    const carIdToBeDeleted = document.querySelector("#car-id").value;

    const options = makeOptions("DELETE");
    fetch(getUrl() + carIdToBeDeleted, options).then(handleHttpErrors);
}
