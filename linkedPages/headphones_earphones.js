var shop_Earphones = document.getElementById("shop_Earphones")

var shopItemsData = [{
    id: "E1",
    name: "R-960 airpods Pro",
    price: 1800,
    Image1: "../images/handfree/img-1.jpg",
    Image2: "../images/handfree/img-1(2).jpg",

},
{
    id: "E2",
    name: "R-960 airpods",
    price: 600,
    Image1: "../images/handfree/img-2.jpg",
    Image2: "../images/handfree/img-2(2).jpg",
},
{
    id: "E3",
    name: "R-960 airpods",
    price: 1600,
    Image1: "../images/handfree/img-3.jpeg",
    Image2: "../images/handfree/img-3(2).jpg",
},
{
    id: "E4",
    name: "R-960 airpods",
    price: 550,
    Image1: "../images/handfree/img-4.jpg",
    Image2: "../images/handfree/img-4(2).jfif",
},
{
    id: "E5",
    name: "R-960 airpods",
    price: 750,
    Image1: "../images/handfree/img-5.jpg",
    Image2: "../images/handfree/img-5(2).jpg",
},
]


function earphones() {

    for (var i = 0; i < shopItemsData.length; i++) {
        shop_Earphones.innerHTML +=
            `<div class="col-sm-6 col-lg-4">
        <a href="https://wa.me/+923153070412" class="d-block text-center mb-4 shop-items">
            <div class="product-list" id="product-id-${shopItemsData[i].id}">
                <div class="product-image position-relative overflow-hidden">
                    <img src="${shopItemsData[i].Image1}" class="img-fluid product-image-first"
                        alt="">
                    <img src="${shopItemsData[i].Image2}"
                        class="img-fluid product-image-second" alt="">
                </div>
                <div class="product-name pt-3">
                    <h3 class="text-capitalize" id="title" >${shopItemsData[i].name}</h3>
                    <p class="mb-0 amount price" id="price">$${shopItemsData[i].price}</p>
                    <div class="py-1">
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star"><i class="fa-solid fa-star"></i></i></span>
                    </div>
                        <button type="button" id=${shopItemsData[i].id} class="btn addToCardBtn">Order Now</button>
                </div>
            </div>
        </a>
    </div>`
    }
}


earphones()


// headphones JS
var shop_headphones = document.getElementById("shop_headphones")

var shopItemsData = [{
    id: "H1",
    name: "BeatStudio HD STN-13-1 stero/MP3/Headset",
    price: 1200,
    Image1: "../images/headphones/BEATS-STN-13-1.jpg",
    Image2: "../images/headphones/BEATS-STN-13(2).jpg",

},
]


function headphones() {

    for (var i = 0; i < shopItemsData.length; i++) {
        shop_headphones.innerHTML +=
            `<div class="col-sm-6 col-lg-4">
        <a href="https://wa.me/+923153070412" class="d-block text-center mb-4 shop-items">
            <div class="product-list" id="product-id-${shopItemsData[i].id}">
                <div class="product-image position-relative overflow-hidden">
                    <span class="sale">New Arrival</span>
                    <img src="${shopItemsData[i].Image1}" class="img-fluid product-image-first"
                        alt="">
                    <img src="${shopItemsData[i].Image2}"
                        class="img-fluid product-image-second" alt="">
                </div>
                <div class="product-name pt-3">
                    <h3 class="text-capitalize" id="title" >${shopItemsData[i].name}</h3>
                    <p class="mb-0 amount price" id="price">Rs ${shopItemsData[i].price}/-</p>
                    <div class="py-1">
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star"><i class="fa-solid fa-star"></i></i></span>
                    </div>
                        <button type="button" id=${shopItemsData[i].id} class="btn addToCardBtn">Order Now</button>
                </div>
            </div>
        </a>
    </div>`
    }
}


headphones()