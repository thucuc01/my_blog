let items = [
  {
    url: "./img/cat1.jpeg",
    name: "Mèo 1",
    price: 1250000,
    des: "detailed description some example text 1.",
    quantity: 15,
    quantitySold: 0,
  },

  {
    url: "./img/cat1.jpeg",
    name: "Mèo 2",
    price: 1240000,
    des: "detailed description some example text 2.",
    quantity: 10,
    quantitySold: 5,
  },

  {
    url: "./img/cat1.jpeg",
    name: "Mèo 3",
    price: 1200000,
    des: "detailed description Some example text 3.",
    quantity: 8,
    quantitySold: 7,
  },

  {
    url: "./img/cat2.jpeg",
    name: "Mèo 4",
    price: 1690000,
    des: "detailed description Some example text 4.",
    quantity: 8,
    quantitySold: 7,
  },

  {
    url: "./img/cat3.jpeg",
    name: "Mèo 5",
    price: 1280000,
    des: "detailed description Some example text 5.",
    quantity: 4,
    quantitySold: 11,
  },

  {
    url: "./img/cat4.jpeg",
    name: "Mèo 6",
    price: 1200000,
    des: "detailed description Some example text 6.",
    quantity: 2,
    quantitySold:13,
  },

  {
    url: "./img/cat1.jpeg",
    name: "Mèo 7",
    price: 1200000,
    des: "detailed description Some example text 7.",
    quantity: 10,
    quantitySold: 5,
  },
  

  {
    url: "./img/cat1.jpeg",
    name: "Mèo 8",
    price: 1500000,
    des: "detailed description Some example text 8.",
    quantity: 6,
    quantitySold: 9,
  },

  {
    url: "./img/cat1.jpEg",
    name: "Mèo 9",
    price: 1200000,
    des: "detailed description Some example text 9.",
    quantity: 15,
    quantitySold: 0,
  },
  {
    url: "./img/cat2.jpeg",
    name: "Mèo 10",
    price: 1290000,
    des: "detailed description Some example text 4.",
    quantity: 8,
    quantitySold: 7,
  },
  {
    url: "./img/cat2.jpeg",
    name: "Mèo 11",
    price: 1490000,
    des: "detailed description Some example text 4.",
    quantity: 1,
    quantitySold: 14,
  },
  {
    url: "./img/cat2.jpeg",
    name: "Mèo 12",
    price: 1530000,
    des: "detailed description Some example text 4.",
    quantity: 8,
    quantitySold: 7,
  },
];

function getProductElement(items) {
  let productElement = "";
  let lengthList = items.length
  items.forEach((element, index) => {
    if (index % 3 == 0) {
      productElement += `<div class="row">`;
    }

    productElement +=
      `<div class="col item-product"> 
       <button class="btn" onclick="showDetail(${index},${lengthList})" 
      data-bs-toggle="modal" data-bs-target="#myModal">
      
      <div class="card">
    
     <img class="card-img-top" src="` +
      element.url +
      `" alt="Card image" />
    
     <div class="card-body">
    
     <h3 class="card-title">` +
      element.name +
      `</h3>
    
     <h6>Giá : ` +
      element.price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      }) +
      `</h6>
    <br>
      <i>Đã bán: ` +
      element.quantitySold +
      `</i> <br><a class="btn btn-primary" > Chi tiết sản phẩm </a>`;

    productElement += ` </div>
    
     </div>
     </button>
    </div> `;

    if (index % 3 == 2) {
      productElement += `</div> `;
    }
    // productElement+= `</button>`
  });
  return productElement;
}
let listProductDOM = document.querySelector(".list-product");
listProductDOM.innerHTML = getProductElement(items) ?? "";
let productSortbyQuantitySold = JSON.parse(JSON. stringify(items)).sort(
  (e1, e2) => e2.quantitySold - e1.quantitySold
);
let [item1, item2, item3, ...arr] = productSortbyQuantitySold;
let featuredProducts = [item1, item2, item3];
let featuredProductsDOM = document.querySelector(".featured-products");
featuredProductsDOM.innerHTML = getProductElement(
  featuredProducts
);

let detailProductDOM = document.querySelector(".modal-body");

function showDetail(index,lg) {
  console.log(lg);
  console.log(index);
  console.log(items,'items');
  let elementDetail = "";
  let element={}
  if(lg===3){
    element=featuredProducts[index];
  }else{
    element=items[index] 
  }

  elementDetail +=
    `<div class="col item-product"> 
     
    
     <div class="card">
    
     <img class="card-img-top" src="` +
    element.url +
    `" alt="Card image" />
    
     <div class="card-body">
    
     <h3 class="card-title">` +
    element.name +
    `</h3>
    
    <p class="card-text">` +
    element.des +
    `</p>
    
     <h5>Giá : ` +
    element.price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    }) +
    `</h5>
    
     <h5>Số lượng: ` +
    element.quantity +
    `</h5> 
      <i>Đã bán: ` +
    element.quantitySold +
    `</i> <br>`;

  elementDetail += element.quantity
    ? `<a href="detailPage.html" class="btn btn-primary" > Mua hàng </a>`
    : `<a href="#" class="btn btn-dark disabled"> Cháy hàng </a>`;

  elementDetail += ` </div>
    
     </div>
    </div> `;
  detailProductDOM.innerHTML = elementDetail;
}
