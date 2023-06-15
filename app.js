// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js'
import {
  getDatabase,
  ref,
  set,
  push,
  onChildAdded
} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCIy4Z9JKG_wOl5IMphxAulu90ql42hLy4',
  authDomain: 'saims-project-faaa0.firebaseapp.com',
  databaseURL: 'https://saims-project-faaa0-default-rtdb.firebaseio.com',
  projectId: 'saims-project-faaa0',
  storageBucket: 'saims-project-faaa0.appspot.com',
  messagingSenderId: '569058612154',
  appId: '1:569058612154:web:339d98fc88015ce3158383',
  measurementId: 'G-2XEKG6RZ9V'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase()

// Js code starts here...
var shop = document.getElementById('shop')

var shopItemsData = [
  {
    id: 'SM1',
    name: 'Fit pro T500 smartWatch',
    price: 2500,
    Image1: './images/watches/T500 smrtwatch.jpg',
    Image2: './images/watches/black-t500 img-1(2).jpg',
    link: './linkedPages/watches.html'
  },
  {
    id: 'H1',
    name: 'BeatStudio HD STN-13-1 stero/MP3/Headset',
    price: 1200,
    Image1: './images/headphones/BEATS-STN-13-1.jpg',
    Image2: './images/headphones/BEATS-STN-13(2).jpg',
    link: './linkedPages/headphones_earphones.html'
  },
  {
    id: 'SM2',
    name: 'Fit pro T55 smartWatch',
    price: 3000,
    Image1: './images/watches/T55 fitpro smrtwatch.webp',
    Image2: './images/watches/img-2(2).jpeg',
    link: './linkedPages/watches.html'
  }
]

function newArrivals() {
  for (var i = 0; i < shopItemsData.length; i++) {
    shop.innerHTML += `<div class="col-sm-6 col-lg-4">
        <a href="${shopItemsData[i].link}" class="d-block text-center mb-4 shop-items">
            <div class="product-list" id="product-id-${shopItemsData[i].id}">
                <div class="product-image position-relative overflow-hidden">
                    <span class="sale">New Arrivals</span>
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
                    
                        <button type="button" onclick="addToCartClicked(${shopItemsData[i].id})" id=${shopItemsData[i].id} class="btn addToCardBtn">Order Now</button>
                </div>
            </div>
        </a>
    </div>`
  }
}

newArrivals()

// Customer Contact Database
var name = document.getElementById('name')
var email = document.getElementById('email')
var message = document.getElementById('message')

window.customerMsg = function () {
  var obj = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  const keyRef = ref(database, 'CustomerMsg/')
  obj.id = push(keyRef).key
  console.log(obj.id)

  const taskrefrence = ref(database, `CustomerMsg/${obj.id}/`)

  set(taskrefrence, obj)

  console.log(obj)
}
