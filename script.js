function createGrid(rows, cols) {
    const container = document.querySelector(".grid.container");
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < cols; j++) {
            const div = document.createElement("div");
            div.className = "block";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    addGridEventListeners();
}

function addGridEventListeners() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "blueviolet";
        });
    });
}


function clearGrid() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.style.backgroundColor = "transparent";
    });
}

function checkValidNumber(num) {
    if (isNaN(num)) return false;
    if (num < 1 || num > 100) return false;
    if (Number.isInteger(num)) return true;
    return false;
}

function popupShow() {
    const popup = document.querySelector("#pop-up-box");
    const popupBG = document.querySelector("#fullscreen-container")
    popup.style.display = "flex";
    popupBG.style.display = "block";
}

function popupHide() {
    const gridContainer = document.querySelector(".grid.container");
    const rowInput = document.querySelector("[name='num-rows']");
    const colInput = document.querySelector("[name='num-cols']");

    const rows = +rowInput.value;
    const cols = +colInput.value;
    if (checkValidNumber(rows) && checkValidNumber(cols)) {
        while (gridContainer.hasChildNodes()) {
            gridContainer.firstChild.remove();
        }
        createGrid(rows, cols);
        popup.style.display = "none";
        popupBG.style.display = "none";
        rowInput.value = "";
        colInput.value = "";
    } else {
        alert("Please enter integers between 1 and 100 inclusive.")
    }
}

function main() {
    createGrid(16, 16);
    const createGridButton = document.querySelector("#new-grid");
    createGridButton.addEventListener("click", popupShow());

    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", popupHide());

    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", clearGrid())
}

main();
