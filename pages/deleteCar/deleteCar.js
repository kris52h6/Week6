import { displayError, getUrl } from "../../settings.js";
import { handleHttpErrors, makeOptions } from "../../utils.js";

export function initDeleteCar() {
    document.querySelector("#submit").addEventListener("mouseup", () => {
        deleteCar();
    });
}

async function deleteCar() {
    const carIdToBeDeleted = document.querySelector("#car-id").value;

    const options = makeOptions("DELETE");
    try {
        fetch(getUrl() + carIdToBeDeleted, options).then(handleHttpErrors);
        console.log(fetch(getUrl() + carIdToBeDeleted, options).then(handleHttpErrors));
    } catch (err) {
        displayError(err.message);
    }
}
