import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
import "cart/CartShow";

console.log("Hello from container bootstrap");

productsMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
