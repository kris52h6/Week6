import { getUrl } from "../../settings.js";
import { handleHttpErrors } from "../../utils.js";
import { sanitizeStringWithTableRows } from "../../utils.js";

export function initCars() {
    getCars();
}

export async function getCars() {
    try {
        const cars = await fetch(getUrl()).then(handleHttpErrors);
        showCars(cars);
    } catch (err) {}
}

function showCars(cars) {
    const tableData = cars.map(
        (car) => `
    <tr>
    <td>${car.id}</td>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.pricePrDay + "DKK"}</td>
    </tr>
    `
    );

    const tableString = tableData.join("\n");
    document.getElementById("tbl-body").innerHTML = tableString;
    // santitize string virker ikke
    // document.getElementById("tbl-body").innerHTML = sanitizeStringWithTableRows(tableString);
}
