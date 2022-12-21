function createResetBtn(parentElement) {
    /* Creates a reset game button and appends it to
    parent element parameter, returns the created button */

    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "button");
    resetBtn.classList.add("btn", "btn-lg");
    resetBtn.classList.add("btn-warning");
    resetBtn.textContent = "Reset Game";
    parentElement.appendChild(resetBtn);
    return resetBtn;
}

export { createResetBtn };