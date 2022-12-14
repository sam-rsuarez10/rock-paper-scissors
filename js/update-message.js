function updateMessage(won, draw, lose, div) {
    /* Updates result's color 
    Receives 3 booleans parameters and a div element*/
    if (won && !draw && !lose) {
        // won scenario
        div.classList.add("alert-success");
        div.classList.remove("alert-danger");
        div.classList.remove("alert-warning");
    } else if (!won && draw && !lose) {
        // draw scenario
        div.classList.remove("alert-success");
        div.classList.remove("alert-danger");
        div.classList.add("alert-warning");
    } else {
        // lose scenario
        div.classList.remove("alert-success");
        div.classList.add("alert-danger");
        div.classList.remove("alert-warning");
    }
}

export {updateMessage}