var shop = document.getElementById('shop')

var shopItemsData = [
  {
    id: 'A1',
    name: 'JBL Air F9 Pro+',
    salePrice: 2400,
    price: 2760,
    Image1: '../images/airpods/img-1.webp',
    Image2: '../images/airpods/img-1(2).png'
  },
  {
    id: 'A2',
    name: 'Login Twins Pro3 Wireless',
    salePrice: 1960,
    price: 1700,
    Image1: '../images/airpods/img-2.jpg',
    Image2: '../images/airpods/img-2(2).jpg'
  },
  {
    id: 'A3',
    name: 'Login Twins Wireless Headset',
    salePrice: 1800,
    price: 2070,
    Image1: '../images/airpods/img-3.jpg',
    Image2: '../images/airpods/img-3(2).jpg'
  },
  {
    id: 'A4',
    name: 'Ronin R-960 (Hall Effect) ',
    salePrice: 3800,
    price: 4370,
    Image1: '../images/airpods/img-4.jpg',
    Image2: '../images/airpods/img-4(2).jpg'
  },
  {
    id: 'A5',
    name: 'TWS M10 wireless Bluetooth Headset ',
    salePrice: 2800,
    price: 3220,
    Image1: '../images/airpods/img-5.jpg',
    Image2: '../images/airpods/img-5(2).jpg'
  },
  {
    id: 'A6',
    name: 'JBL Air RO2 True Wireless Headphones ',
    salePrice: 2000,
    price: 2300,
    Image1: '../images/airpods/img-6.jfif',
    Image2: '../images/airpods/img-6(2).jfif'
  },
  {
    id: 'A7',
    name: 'Realme Air Buds ',
    salePrice: 1400,
    price: 1600,
    Image1: '../images/airpods/img-7.jpg',
    Image2: '../images/airpods/img-7(2).jpg'
  }
]

function airpods () {
  for (var i = 0; i < shopItemsData.length; i++) {
    shop.innerHTML += `<div class="col-sm-6 col-lg-4">
        <a href="https://wa.me/+923153070412" class="d-block text-center mb-4 shop-items">
            <div class="product-list" id="product-id-${shopItemsData[i].id}">
                <div class="product-image position-relative overflow-hidden">
                    <span class="sale">Sale</span>
                    <img src="${shopItemsData[i].Image1}" class="img-fluid product-image-first"
                        alt="">
                    <img src="${shopItemsData[i].Image2}"
                        class="img-fluid product-image-second" alt="">
                </div>
                <div class="product-name pt-3">
                    <h3 class="text-capitalize" id="title" >${shopItemsData[i].name}</h3>
                    <p class="mb-0 amount price" id="price">Rs ${shopItemsData[i].salePrice}/- <del>${shopItemsData[i].price}</del></p>
                    <div class="py-1">
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star active"><i class="fa-solid fa-star"></i></i></span>
                        <span class="star"><i class="fa-solid fa-star"></i></i></span>
                    </div>
                        <button type="button" id=${shopItemsData[i].id} class="btn addToCardBtn">Order Now</button>
                </div>
            </div>
        </a>
    </div>`
  }
}

airpods()
