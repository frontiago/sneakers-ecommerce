const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    description: "Introduced to the world in 1982, the Nike Air Force 1 was the first basketball shoe to feature Nike Air technology, revolutionizing the game forever.",
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    description: "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about takeoffs and landings, with multiple Air units to help get you off the ground and Formula 23 foam to ease your impact.",
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    price: 109,
    description: "Styled for the ‘70s. Loved in the ‘80s. Classic in the ‘90s. Ready for the future. The Nike Blazer Mid ’77 Vintage delivers a timeless design that’s easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel.",
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },

  {
    id: 4,
    title: "Crater",
    price: 129,
    description: "Today´s world brings choices. There´s no reason to second-guess yourself with the Nike Crater Remixa.   Made from at least 20% recycled materials by weight, it bridges futuristic details with a fresh design that pieces together reclaimed materials.",
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    price: 99,
    description: "With its embrace of foams and plastics and a hype-driven culture that encourages disposability, the sneaker industry is not exactly known for sustainability. ",
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
const currentProductTitle= document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')
const currentProductDescription = document.querySelector('.productDescription') 

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // change the choosen product
        choosenProduct = products[index]
        
        // change product text 
        currentProductTitle.textContent = choosenProduct.title 

        // change product price
        currentProductPrice.textContent = "$" + choosenProduct.price 

        // change product image 
        currentProductImg.src = choosenProduct.colors[0].img

        // change product description 
        currentProductDescription.textContent = choosenProduct.description

        // change product colors and imgs
        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.colors[index].code

          color.addEventListener('click', () => {
            currentProductImg.src = choosenProduct.colors[index].img
          })
        })       
    })
})

// switch between product sizes
currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white'
      size.style.color = 'black'
    })
    size.style.backgroundColor = 'black'
    size.style.color = 'white'
  });
});

const buyProduct = document.querySelector('#buyProduct')
const paymentBox = document.querySelector('.payment')
const buttonClose = document.querySelector('span.close')

buyProduct.addEventListener('click', () => {
  paymentBox.style.display = 'flex'
})

buttonClose.addEventListener('click', () => {
  paymentBox.style.display = 'none'
})