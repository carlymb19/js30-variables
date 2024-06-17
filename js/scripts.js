// Carly Brown - 9/21
/* Adapted from https://courses.wesbos.com/account/access/64ea54d5119d0f571e0842f1
   Playing with CSS Variables and JS */
/* New method: .forEach()
   New keyword: this.
   New property: dataset */

// The biggest addition I wanted to add was the ability to change the image the CSS was modifying

const inputs = document.querySelectorAll('.controls input');
const imageDisplay = document.getElementById('imageDisplay'); // I declared a new variable to access where the image is inserted

function handleUpdate() { 
    const suffix = this.dataset.sizing || ''; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
    
    if (this.name === 'image') { // I added an if statement since the range input would not be modifying a value like the original function does  
        const imageIndex = parseInt(this.value); // Instead I had it take the value of the slider and convert it into an integer so the corresponding url in the following array could be retrieved
        imageDisplay.src = images[imageIndex]; // which is then added in place of the default one
    }
}

inputs.forEach(input => input.addEventListener('input', handleUpdate)); // To simplify the code, I learned how to combine the actions of the two .forEach methods from the original code into one with the "input" event listener

let images = [ // I used urls from unsplash to avoid copyright infringement
    'https://images.unsplash.com/photo-1693168240236-b84042ff1ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',    
    'https://images.unsplash.com/photo-1694444803758-7faa13415304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1694514991962-9152c2a07e01?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1694593812298-8cb32d3e7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1694475719149-b7ce675ca2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

