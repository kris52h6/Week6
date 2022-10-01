const url = "http://localhost:8080/api/cars/";

export function getUrl() {
    return url;
}

export function displayError(errorMessage) {
    document.querySelector("#error").innerText = errorMessage;
}
