


const gridContainer = document.getElementById('grid-container')
const boardSize = 640


const clearButton = document.querySelector('#clear-button')
let div = document.createElement("div");
//creates empty array for each square required in the grid.
let x=16 //starting column value
let divArray = new Array(x*x);
let divElements = ""



/*resize prompt activates a prompt that allows the user to pick the 
size of the etch a sketch board */
function resizePrompt() {     
    let newWidthAndHeight = prompt("Enter new Etch-a-Sketch size", '16');
   
    x = newWidthAndHeight; // x represents how many boxes wide and tall    
    itemSize = boardSize / x //gridItemSize before being turned into a string 640px*640px is the size of the box    
    divElements = '' //reset's divElements for the loop to simplify process of starting grid again
    for (var i = 0; i < (x*x); i++) {
        divElements += '<div class="grid-item"></div>'
    }
    gridContainer.innerHTML = divElements
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + x +', auto)');
    gridContainer.style.setProperty('grid-template-rows', 'repeat(' + x +', auto)');
    const gridItemCSS = document.querySelectorAll('.grid-item');
  
    for(let i=0;i < gridItemCSS.length; i++) {
        gridItemCSS[i].style.setProperty('height', itemSize + 'px');
        gridItemCSS[i].style.setProperty('width', itemSize + 'px');
    }

    //this item is what changes the pixels when you mouseover them to black
    // i did this by allowing the EventListener to append '-hovered'
    // to the end of the 'grid-item' class, thus creating a new
    // class altogether with different CSS properties

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover', event => {
            if (event.target.className == 'grid-item') {
                event.target.className += "-hovered"
            }
        });
    });
}

/* Clears screen by using event listener which then cycles 
 through the class grid-item-hovered, and turns it back
 into grid-item */
clearButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-item-hovered').forEach(item => {
        item.className = 'grid-item';
    });
    // Code Below: Removes all previously created grid-item divs 
    // to simplify the resizePrompt function
    document.querySelectorAll('.grid-item').forEach(items => {
        items.parentNode.removeChild(items)
    });
    resizePrompt()
});
// For loop creates a div element for every element in Array (divArray)
for (var i = 0; i < divArray.length; i++) {
    divElements += '<div class="grid-item"></div>'
}
// code below places the divs created in the above loop into the HTML doc
gridContainer.innerHTML = divElements

/* This query selector allows a mousover event to change the class
   of the grid-items in order to allow a background change */
document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover', event => {
            if (event.target.className == 'grid-item') {
                event.target.className += "-hovered"
            }
        });
});