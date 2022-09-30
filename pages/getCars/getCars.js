import { getUrl } from "../../settings.js";
import { sanitizeStringWithTableRows } from "../../utils.js";

export function initCars() {
    getCars();
}

export async function getCars() {
    try {
        const cars = await fetch(getUrl()).then((res) => res.json());
        showCars(cars);
    } catch (err) {}
}

function showCars(cars) {
    console.log(cars);
    const tableData = cars.map(
        (car) => `
    <tr>
    <td>${car.id}</td>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.pricePrDay}</td>
    </tr>
    `
    );

    const tableString = tableData.join("\n");
    document.getElementById("tbl-body").innerHTML = tableString;
    // santitize string virker ikke
    // document.getElementById("tbl-body").innerHTML = sanitizeStringWithTableRows(tableString);
}
