$(window).on("load", function () {
  $(".main-slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 25000,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,

        loop: true,
      },
    },
  });
});

$(window).on("load", function () {
  $(".recent-slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 25000,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        loop: true,
      },
    },
  });
});

// Auto text write animation
let p = document.querySelector(".section-desc p");

let text = "welcome ipsum dolor sit amet consectetur adipisicing elit";

let index = 0;

function writer() {
  if (index >= 55) index = 0;

  index += 1;

  p.innerHTML = text.slice(0, index);
}
setInterval(() => writer(), 300);

// search
let icon = document.querySelector(".icon-search");
let search = document.querySelector(".search-box");

let input = document.querySelector("input[type ='text']");

icon.onclick = function () {
  search.classList.toggle("active");
  input.focus();
};

// toggle-menu
$(window).on("load", function () {
  $(".toggle-menu").click(function () {
    $(".wrapper-drawer").toggleClass("open");
  });
});

let items = [
  {
    id: 1,
    name: "product One",
    price: 1000,
    incart: 0,
    image: "asstes/images/5.png",
  },

  {
    id: 2,
    name: "product two",
    price: 2000,
    incart: 0,
    image: "asstes/images/33.png",
  },

  {
    id: 3,
    name: "product three",
    price: 1500,
    incart: 0,
    image: "asstes/images/6.png",
  },
  {
    id: 4,
    name: "product four",
    price: 1500,
    incart: 0,
    image: "asstes/images/7.png",
  },

  {
    id: 5,
    name: "product five",
    price: 1000,
    incart: 0,
    image: "asstes/images/im9.png",
  },
  {
    id: 6,
    name: "product six",
    price: 2000,
    incart: 0,
    image: "asstes/images/E5406-14W_1.png",
  },
  {
    id: 7,
    name: "product seven",
    price: 1500,
    incart: 0,
    image: "asstes/images/965257.png",
  },
  {
    id: 8,
    name: "product eight",
    price: 1500,
    incart: 0,
    image: "asstes/images/E5312-14W_1.png",
  },
  {
    id: 9,
    name: "product night",
    price: 1500,
    incart: 0,
    image: "asstes/images/E5310-14R.png",
  },
  {
    id: 10,
    name: "product ten",
    price: 1500,
    incart: 0,
    image: "asstes/images/im9.png",
  },
  {
    id: 11,
    name: "product elev",
    price: 1500,
    incart: 0,
    image: "asstes/images/i3.png",
  },
  {
    id: 12,
    name: "product twe",
    price: 1500,
    incart: 0,
    image: "asstes/images/8.png",
  },
  {
    id: 13,
    name: "product the",
    price: 1500,
    incart: 0,
    image: "asstes/images/2.png",
  },
  {
    id: 14,
    name: "earring the",
    price: 1500,
    incart: 0,
    image: "asstes/images/5.png",
  },
  {
    id: 15,
    name: "earring the",
    price: 1500,
    incart: 0,
    image: "asstes/images/5.png",
  },
  {
    id: 16,
    name: "earring the",
    price: 1500,
    incart: 0,
    image: "asstes/images/5.png",
  },
];

let carts = document.querySelectorAll(".cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumber(items[i]);
    totalPrice(items[i]);
  });
}

// for save counter in localStorage when reload website
function onLoadCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
    document.querySelector(".cart-icon small").textContent = productNumber;
  }
}

// localStorage
function cartNumber(item) {
  let productNumber = localStorage.getItem("cartNumber");

  productNumber = parseInt(productNumber);

  if (productNumber) {
    localStorage.setItem("cartNumber", productNumber + 1);

    // get get counter in cart added countprodeuct
    document.querySelector(".cart-icon small").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumber", 1);

    //  get counter in cart
    document.querySelector(".cart-icon small").textContent = 1;
  }

  setItems(item);
}

function setItems(item) {
  let cartItems = localStorage.getItem("ItemsInCarts");

  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[item.name] == undefined) {
      cartItems = {
        ...cartItems,
        [item.name]: item,
      };
    }

    cartItems[item.name].incart += 1;
  } else {
    item.incart = 1;
    cartItems = {
      [item.name]: item,
    };
  }

  localStorage.setItem("ItemsInCarts", JSON.stringify(cartItems));
}

// دالة لحساب السعر الكامل
function totalPrice(item) {
  // console.log("my total price : " , item.price)

  let cartTotal = localStorage.getItem("totalPrice");
  console.log(typeof cartTotal); // string
  // cartTotal = parseInt(cartTotal)
  console.log("my total price : ", cartTotal);
  console.log(typeof cartTotal); //number

  if (cartTotal != null) {
    cartTotal = parseInt(cartTotal);
    localStorage.setItem("totalPrice", cartTotal + item.price);
  } else {
    localStorage.setItem("totalPrice", item.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("ItemsInCarts");
  cartItems = JSON.parse(cartItems);

  console.log(cartItems);
  let cartproducts = document.querySelector(".products");

  // console.log(cartproducts);
  let cartTotal = localStorage.getItem("totalPrice");

  if (cartItems && cartproducts) {
    cartproducts.innerHTML = "";
    Object.values(cartItems).map((item) => {
      cartproducts.innerHTML += `
      <div class="cart-prod">
      <table>
      <tr>

 

      <td class= "product" style="width: 200px;">
      <i class="fa fa-times icon-close toggle-menu" aria-hidden="true"></i>
      <img src ="${item.image}">
      </td>

      <td class= "name" style="width: 200px;">
      <span>${item.name}</span>
      </td>

      <td class= "price" style="width: 200px;">
      $${item.price},00
      </td>


      <td class= "quantity" style="width: 200px;">
      <button class="decrease">
      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </button>

      <span class="val">${item.incart}</span>

      <button class="increase">
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </button>
      </td>


      <td class= "total" style="width: 200px;">
      $${item.incart * item.price},00
      </td>


      </tr>
      </table>
    
      `;
    });
    cartproducts.innerHTML += `
    <div class="totalpriceproducts">
    <h4 class = "totalpricetitle">
    Total Price Products
    </h4>
    <h4 class = "totalprice" >
    $${cartTotal},00
    </h4>
    `;
  }
}


onLoadCartNumber();

displayCart();

// // cart page
// let product = document.querySelector(".product");

// // let btns = document.querySelectorAll(".btn")
// let count = 1;

// let increaseitem = document.querySelectorAll(".increase");
// let decreaseitem = document.querySelector(".decrease");

// let counter = document.querySelector(".counter-item");

// for(let i=0; i< increaseitem.length; i++) {
//   var btn = increaseitem[i];
//   btn.addEventListener('click' , (e) => {
//     var btnClicked = e.target;
//     // console.log(btnClicked)
//     // console.log("hi")

//     var sp = btnClicked.parentElement.parentElement.children[1];
//     console.log(sp)
//     // var spvalue = item.incart;
//     // console.log(spvalue)
//   })
// }

// scrool
let scroll = document.querySelector(".scroll-link");

scroll.style.display = "none";
window.onscroll = function () {
  if (this.scrollY >= 700) {
    // console.log('scrolling by value ${this.scrollY}')

    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
};

scroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// page login
let form = document.forms[0];

// Username
let nameDiv = document.querySelector(".name");
let userName = document.getElementById("username");
let nameWarn = document.querySelector(".name .warning");

// Email
let emailDiv = document.querySelector(".email");
let email = document.getElementById("email");
let emailWarn = document.querySelector(".email .warning");

// password
let passDiv = document.querySelector(".pass");
let pass = document.getElementById("password");
let iconPass = document.querySelector(".icon-pass");
let passWarn = document.querySelector(".pass .warning");

let labels = document.getElementsByTagName("label");
let submitBtn = document.querySelector("[type='submit']");

let allInputs = [userName, email, pass];

let labelOnFocus =
  "top: -.75rem; font-size: .50rem; color: #ddd; background-color: var(--main-color); border: none";

allInputs.forEach((el) => {
  el.onfocus = function () {
    el.type === "text"
      ? (labels[0].style = labelOnFocus)
      : el.type === "email"
        ? (labels[1].style = labelOnFocus)
        : el.type === "password"
          ? (labels[2].style = labelOnFocus)
          : "";
  };
});

iconPass.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    iconPass.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    pass.type = "password";
    iconPass.classList.replace("fa-eye", "fa-eye-slash");
  }
});

form.onsubmit = (event) => {
  let userValid = false;
  let emailValid = false;
  let passValid = false;

  if (
    userName.value !== "" &&
    userName.value.length <= 12 &&
    !userName.value.includes("/") &&
    !userName.value.includes(".") &&
    !userName.value.includes('"')
  ) {
    userValid = true;
  }

  if (email.value !== "" && email.value.includes("@")) {
    emailValid = true;
  }

  if (pass.value !== "" && pass.value.length >= 12) {
    passValid = true;
  }

  if (userValid === false || emailValid === false || passValid === false) {
    event.preventDefault();
  }

  // Warnings
  if (userValid === false) {
    nameWarn.classList.add("showen");
  } else {
    nameWarn.classList.remove("showen");
  }

  if (emailValid === false) {
    emailWarn.classList.add("showen");
  } else {
    emailWarn.classList.remove("showen");
  }

  if (passValid === false) {
    passWarn.classList.add("showen");
  } else {
    passWarn.classList.remove("showen");
  }
};

// $(document).ready(function () {
//   //venobox
//   $(".venobox").venobox({
//     framewidth: "40%",
//     frameheight: "50%",
//     autoplay: true,
//     spinner: "wave",
//     spinColor: "#dda333",
//     border: "2px",
//   });
// });
