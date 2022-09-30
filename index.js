import "https://unpkg.com/navigo";
import { setActiveLink, adjustForMissingHash, renderTemplate, loadHtml } from "./utils.js";

import { initCars } from "./pages/getCars/getCars.js";
import { initCar } from "./pages/getSingleCar/getSingleCar.js";
import { initAddCar } from "./pages/addCar/addCar.js";

window.addEventListener("load", async () => {
    const templateCars = await loadHtml("./pages/getCars/getCars.html");
    const templateSingleCar = await loadHtml("./pages/getSingleCar/getSingleCar.html");
    const templateAddCar = await loadHtml("./pages/addCar/addCar.html");

    const router = new Navigo("/", { hash: true });
    window.router = router;

    router
        .on({
            //For very simple "templates", you can just insert your HTML directly like below
            "/": () =>
                (document.getElementById("content").innerHTML = `<h2>Home</h2>
        <p style='margin-top:2em'>
        Client for the Cars 'R' Us API
        </p>
        <p style="font-weight:bold">By kris52h6</p>
        `),
            "/about": () => renderTemplate(templateAbout, "content"),

            "/cars": () => {
                renderTemplate(templateCars, "content");
                initCars();
            },
            "/car": () => {
                renderTemplate(templateSingleCar, "content");
                initCar();
            },
            "/add-car": () => {
                renderTemplate(templateAddCar, "content");
                initAddCar();
            },
        })
        .notFound(() => {
            renderTemplate(templateNotFound, "content");
        })
        .resolve();
});
