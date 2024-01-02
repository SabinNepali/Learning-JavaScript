/***************************Immediately Invoked Function Expression**************************/

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO`);
} )("Sabin");

( (name) => {
    // Unnamed IIFE with paramater
    console.log(`DB CONNECTED TWO ${name}`);
} )("Sabin");
