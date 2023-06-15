var shop = document.getElementById('shop')

var shopItemsData = [
  {
    id: 'SM1',
    name: 'Fit pro T500 smartWatch',
    price: 2500,
    Image1: '../images/watches/T500 smrtwatch.jpg',
    Image2: '../images/watches/black-t500 img-1(2).jpg'
  },
  {
    id: 'SM2',
    name: 'Fit pro T55 smartWatch',
    price: 3000,
    Image1: '../images/watches/T55 fitpro smrtwatch.webp',
    Image2: '../images/watches/img-2(2).jpeg'
  }
]

function watches () {
  for (var i = 0; i < shopItemsData.length; i++) {
    shop.innerHTML += `<div class="col-sm-6 col-lg-4">
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
watches()
