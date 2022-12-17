function createGameBtn(parentElement) {
    /* Given a parent element creates the rock, paper, scissors
    buttons options, append them to parent and return an array of buttons */
    let btnArray = [];
    for (let btn = 0; btn < 3; btn++) {
        const option = document.createElement("button");
        option.setAttribute("type", "button");
        option.classList.add("btn", "btn-lg");

        if(btn == 0) {
            // rock's button
            option.classList.add("btn-primary");
            option.textContent = "Rock";
        } else if (btn == 1) {
            // paper's buttton
            option.classList.add("btn-success");
            option.textContent = "Paper";
        } else {
            // scissors' button
            option.classList.add("btn-warning");
            option.textContent = "Scissors";
        }

        // append to parent element
        parentElement.appendChild(option);
        // add to array
        btnArray.push(option);
    }

    return btnArray;
}

export {createGameBtn};