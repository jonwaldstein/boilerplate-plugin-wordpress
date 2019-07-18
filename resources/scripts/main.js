//Import Libraries
import domReady from '@wordpress/dom-ready';

// Import custom modules
import App from'./modules/app.js';

//Initiate Classes Here
const app = new App();


// Run Class Based Scripts Here
domReady( function() {

  app.init();

} );