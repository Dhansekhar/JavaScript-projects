let product_element = document.querySelector('#products-wrapper')
let cartCount=document.querySelector('#cartCount')

let searchInput = document.querySelector('#search');
let filterCheckboxes = document.querySelectorAll('.check');
// console.log(product_element);


const products = [
  {
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'images/samsung_galaxy.png',
    type: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'images/cannon_eos_camera.png',
    type: 'cameras',
    price: 749.99,
  },
  {
    name: 'Sony A7 Camera',
    url: 'images/sony_a7_camera.png',
    type: 'cameras',
    price: 1999.99,
  },
  {
    name: 'LG TV',
    url: 'images/lg_tv.png',
    type: 'televisions',
    price: 799.99,
  },
  {
    name: 'Nintendo Switch',
    url: 'images/nintendo_switch.png',
    type: 'games',
    price: 299.99,
  },
  {
    name: 'Xbox Series X',
    url: 'images/xbox_series_x.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung TV',
    url: 'images/samsung_tv.png',
    type: 'televisions',
    price: 1099.99,
  },
  {
    name: 'Google Pixel',
    url: 'images/google_pixel.png',
    type: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Sony ZV1F Camera',
    url: 'images/sony_zv1f_camera.png',
    type: 'cameras',
    price: 799.99,
  },
  {
    name: 'Toshiba TV',
    url: 'images/toshiba_tv.png',
    type: 'televisions',
    price: 499.99,
  },
  {
    name: 'iPhone 14',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
];

const productElementarray=[]
products.forEach((product)=>{
    const productEL=createProductElement(product)
    // console.log(productEL);
    
    productElementarray.push(productEL)
    // console.log(productElementarray);
    // console.log(product_element);
    
    product_element.appendChild(productEL)
})

let cart=0;

function createProductElement(product){
    const productdiv=document.createElement('div')
    productdiv.className= 'item space-y-2'
    productdiv.innerHTML=`<div
  class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border"
>
<img src="${product.url}" alt="${product.name} " class="w-full h-full object-cover"></img>

</div> `;

productdiv.addEventListener('click',()=>{
  cart++;
  cartCount.innerHTML=cart

})
return productdiv
}

searchInput.addEventListener('input',Searchfunction())

function Searchfunction(){
console.log("Hello");

let getText= searchInput.value().trim();
console.log(getText);


}




// // Render products
// function renderProducts(list) {
//   product_element.innerHTML = ''; // clear first
//   list.forEach((p) => {
//     product_element.appendChild(createProductElement(p));
//   });
// }


// // Handle search + filter
// function filterProducts() {
//   const searchText = searchInput.value.toLowerCase().trim();

//   // Get checked filters
//   let selectedTypes = [];
//   filterCheckboxes.forEach((checkbox) => {
//     if (checkbox.checked) selectedTypes.push(checkbox.id);
//   });

//   let filtered = products.filter((p) => {
//     // check name match
//     const matchSearch = p.name.toLowerCase().includes(searchText);

//     // check category match
//     const matchCategory =
//       selectedTypes.length === 0 ? true : selectedTypes.includes(p.type);

//     return matchSearch && matchCategory;
//   });

//   renderProducts(filtered);
// }

// // Initial render
// renderProducts(products);

// // Events
// searchInput.addEventListener('input', filterProducts);
// filterCheckboxes.forEach((cb) => cb.addEventListener('change', filterProducts));


