let squareAmount;
let squareDimensions;
let drawColor = "blue";

async function generateSquares(_container, _squareAmount) {

    for (i = 1; i <= _squareAmount; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        gridSquare.style.flex = "0, 0, auto";
        gridSquare.style.boxSizing = "border-box";
        gridSquare.style.height = `${squareDimensions}px`;
        gridSquare.style.width = `${squareDimensions}px`;

        gridSquare.addEventListener("mouseover", (e) => {
            gridSquare.style.backgroundColor = drawColor
        });
    
        _container.appendChild(gridSquare);
    }
}

async function main() {
    const container = document.querySelector(".container");
    const containerObj = window.getComputedStyle(container);
    const containerWidthString = containerObj.getPropertyValue("width");
    const containerWidth = containerWidthString.substring(0, containerWidthString.length - 2);

    let gridLength = await prompt("Please set the grid resolution (e.g. '100' for 100x100)", "100");

    squareAmount = Math.pow(gridLength, 2);
    squareDimensions = containerWidth / gridLength;

    await generateSquares(container, squareAmount);
}

main();