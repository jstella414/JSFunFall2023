!(function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */


const table = document.querySelector("#productTableBody")

const createRow = (product) =>{
  table.innerHTML += `<tr id ="product-${product.id}">
  <td>${product.id}</td>
  <td>${product.title}</td>
  <td>${product.description}</td>
  <td>$${product.price.toFixed(2)}</td>
  <td>${product.discountPercentage}</td>
  <td>${product.rating}</td>
  <td>${product.stock}</td>
  <td>${product.brand}</td>
  <td>${product.category}</td>
  <td>
    <button id = "row-${product.id}" class="btn btn-danger btn-sm delete-product-btn delete-button">Delete</button>
   </td>

</tr>`
};




fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(response => {
//console.log(response)
for(product of response.products){
  createRow(product);

}



const deleteButton = document.querySelectorAll(".delete-button")

deleteButton.forEach( button => {
  button.addEventListener("click",()=>{
    let buttonID = button.id.replace("row-", "");

    fetch('https://dummyjson.com/products/'+ buttonID, {
    method: 'DELETE',
})
.then(res => res.json())
.then(response =>{
  const row = document.querySelector(`#product-${buttonID}`)
  //console.log(row);
  row.style.display = "none";

});
    

  })
})
});
///handle the form when submitted
//make api request
//set up successful add item to the table


const form = document.querySelector('#productForm')
const titleInput = document.querySelector('#title')

form.addEventListener("submit", (event) =>{
event.preventDefault();
//console.log(event.target.elements) ///gives you all the fields
const data = {}; 
for(const elem of event.target.elements){
  if(elem.id === "price"){
    data[elem.id] = parseFloat(elem.value);
  }
  else if (elem.id !== "addProductBtn"){
    //console.log(elem, elem.value);//value will give you what was typed in
  data[elem.id] = elem.value;
  }
}
console.log(data,"DATA")

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
.then(res => res.json())
.then((product)=>{
  product.discountPercentage = data.discountPercentage;
  console.log(product,"TEST")
  createRow(product)
});

})


})();