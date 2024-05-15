function createGrid(rows, cols) {
    const container = document.querySelector(".container");
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < cols; j++) {
            const div = document.createElement("div");
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function main() {
    createGrid(16, 16);
}

main();
