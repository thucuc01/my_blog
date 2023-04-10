let items = [
  {
    url: "./img/cat1.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 15,
  },

  {
    url: "./img/cat1.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 10,
  },

  {
    url: "./img/cat1.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 5,
  },

  {
    url: "./img/cat2.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 8,
  },

  {
    url: "./img/cat3.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 1,
  },

  {
    url: "./img/cat4.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 15,
  },

  {
    url: "./img/cat1.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 0,
  },

  {
    url: "./img/cat1.jpeg",

    price: 1200000,

    des: "Some example text.",

    quantity: 15,
  },

  {
    url: "./img/cat1.jpEg",

    price: 1200000,

    des: "Some example text.",

    quantity: 15,
  },
];

let productElement = "";

for (let index = 0; index < items.length; index++) {
  const element = items[index];

  if (index % 3 == 0) {
    productElement += `<div class="row">`;
  }

  productElement +=
    `<div class="col item-product">
  
   <div class="card">
  
   <img class="card-img-top" src="` +
    element.url +
    `" alt="Card image" />
  
   <div class="card-body">
  
   <h4 class="card-title">John Doe</h4>
  
  <p class="card-text">Some example text.</p>
  
   <h6>Price : ` +
    element.price.toLocaleString("it-IT", { style: "currency", currency: "VND" }) +
    `</h6>
  
   <h6>Quantity: ` +
    element.quantity +
    `</h6>`;

  productElement += element.quantity
    ? `<a href="productDetail.html" class="btn btn-primary" > Chi tiết </a>`
    : `<a href="#" class="btn btn-dark disabled"> Hết hàng </a>`;

  productElement += ` </div>
  
   </div>
  
  </div>`;

  if (index % 3 == 2) {
    productElement += `</div>`;
  }
}

let listProductDOM = document.querySelector(".list-product");

listProductDOM.innerHTML = productElement;
