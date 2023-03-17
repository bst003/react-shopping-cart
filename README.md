# React Shopping Cart

This React project was boostrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a> as part of The Odin Project curriculum. The goal of this project was to practice using React Rotuing and Testing capabilities.

## Routing

Routing is used throughout this project to serve both statis and dynamic routes. All of the routes excluding the Product <code>/shop/:slug</code> are statis routes. The Product route uses the slug of the product to filter data from the json data sheet to populate the page. If the slug does nto correspond with any product data the user is taken to a 404 page.

## Updating Cart

There are three main methods used to update the cart for this project <code>addToCart</code>, <code>deleteCartItem</code> and <code>updateCartItem</code>.

<code>addToCart</code> is called when the user submits a form on the ProdsCartForm component and is called with an object argument that contains the name, id and quantity of the item being added to the cart. If the item exists in the cart the <code>findMatchingIndex</code> method is used to find the index of the item being updated and the new quantity of the item is summed with the quantity already in the cart.

<code>deleteCartItem</code> is called when the user triggers the delete button in the CartTableItem component and is called with an object argument that contains the id of the item being deleted from the cart.

<code>updateCartItem</code> is called when the user submits the edit in the CartTableItem component and is called with an object argument that contains the name, id and quantity of the item being updated in the cart.

## Retrieving Data

The product data for this project is pulled from a local json file and filtered/mapped depending on where it is used. in the ProdsGrid component every product object is mapped over and rendered as a ProdsGridItem element. Other scenarios using this data include the ProdInfo component which inherits the product slug from the Product component and then filters through the product data to return the correct information.

## Testing

Jest testing was used throughout this project to ensure that elements were appearing on screen at the correct times and to ensure that methods are being called with properly formatted arguments.
