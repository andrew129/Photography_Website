let imageArr = ["./images/hannah1.jpeg", "./images/hannah2.jpeg"];
let currentIndex = 0;
let imageTag = document.querySelector(".bio-img");
let photoArea = document.querySelector('.all-photos')
let timer;

let imgObj = {
  Couples: ["./images/Chloe and Grayson Final Large 31.png",
    "./images/Noelle _ Hayden Final Large 14.jpg", "./images/Nubia _ Angel Final Large 7.jpg", 
    "./images/Sterling _ Jerred Final Edit large 6.jpg", "./images/Amy _ Alex Final Edit Large 13.jpg","./images/Amy _ Alex Final Large 3.jpg",
    "./images/Amy _ Alex Final Large 19.jpg", "./images/Deja _ Jacob Final Edit Large 18.jpg",
    "./images/Cassidy _ Hunter Final Large 6.jpg", 
    './images/Chloe and Grayson Final Large 4.png',
    './images/Ever _ Family Final Large 9.png',
    './images/Ever _ Family Final Large 26.png',
    "./images/Cassidy _ Hunter Final Large 12.jpg",
    './images/Chloe and Grayson Final Large 16.png', 
    "./images/Noelle _ Hayden Final Large 18.jpg",
    './images/Nubia _ Angel Final Large 11.jpg', 
    // './images/Sterling _ Jerred Final Edit large 12.jpg'
  ],
  Maternity: [
    './images/Modjeska Final Large 6.png',
    './images/Serena Final Edit Large 22.jpg', './images/Angela Large Final 12.jpg',
    './images/Serena Final Edit Small 1.jpg', './images/Modjeska Final Large 4.png',
    './images/Modjeska Final Large 7.png', './images/Noelle _ Ben Final Edit Large 1.jpg',
    './images/Serena Final Edit Large 17.jpg'


  ],
  Families: [
    './images/Kiersten _ Family Large 4 NO smile.jpg',
    './images/Aliya _ Family Large 4 Final.jpg', './images/Ever _ Family Final Large 28.png',
    './images/Jessica Family Final Large 17.png', './images/Ever _ Family Final Large 13.png',
    './images/Ever _ Family Final Large 15.png', './images/Jessica Family Final Large 11.png',
    './images/Kiersten _ Family Large 8.jpg', './images/Mara _ Family Final Large 12.jpg', 
    './images/Mara _ Family Final Large 19.jpg', 

  

  ],
  Children: [
    './images/Aliya _ Family Final Small 10.jpg', './images/Jessica Family Final Large 2.png',
    './images/Jessica Family Final Large 4.png', './images/Jessica Family Final Large 27.png', 
    './images/Jessica Family Final Large 28.png', './images/Jessica Family Final Large 33.png',
    './images/Modjeska Final Large 8.png', './images/Modjeska Final Large 9.png'



  ],
  Graduation: [
    './images/Chelsea Grad Final Large 7.jpg', './images/Chelsea Grad Final Large 9.jpg',
    './images/Chelsea Grad Final Large 18.jpg',  
  ]
}

let typesOfPhotos = [
  {
    title: 'Couples',
    image: './images/Chloe and Grayson Final Large 31.png'
  },
  {
    title: 'Maternity',
    image: './images/Modjeska Final Large 6.png'
  },
  {
    title: 'Families',
    image: './images/Kiersten _ Family Large 4 NO smile.jpg'
  },
  {
    title: 'Children',
    image: './images/Mara _ Family Final Large 19.jpg'
  },
  {
    title: 'Graduation',
    image: './images/Chelsea Grad Final Large 18.jpg'
  }
]

document.querySelector(".scroll-btn").onclick = () => window.scrollTo(0, 0);

window.addEventListener("scroll", function () {
  if (parseInt(this.scrollY) === 0) {
    document.querySelector(".scroll-btn").style.display = "none";
  } else {
    document.querySelector(".scroll-btn").style.display = "block";
    document.querySelector(".scroll-btn").classList.add("scroll-fade");
    setTimeout(
      () =>
        document.querySelector(".scroll-btn").classList.remove("scroll-fade"),
      1000
    );
  }
});

function startShow() {
  imageTag.src = imageArr[currentIndex];
  imageTag.classList.remove("fade-out");
  imageTag.classList.add("fade-in");

  if (currentIndex === imageArr.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setTimeout(() => {
    imageTag.classList.remove("fade-in");
    setTimeout(() => {
      imageTag.classList.add("fade-out");
      setTimeout(() => {
        requestAnimationFrame(startShow);
      }, 4000);
    }, 4000);
  }, 4000);
}

requestAnimationFrame(startShow);

jQuery(function () {
  jQuery(".toggle-menu a").click(function (e) {
    e.preventDefault();
    jQuery(".right-nav").toggleClass("toggleNav");
  });
});

function displayImages() {
  console.log(this.textContent)
  let galleryName = this.textContent.split(' ')[1]
  console.log(galleryName)
  photoArea.classList.remove('photo-section')
  photoArea.textContent = ''
  photoArea.classList.add('images')
  document.querySelector('.gallery p').remove()

  let buttonArea = document.createElement('div')
  buttonArea.classList.add('button-area')

  let backBtn = document.createElement('button')
  backBtn.classList.add('backBtn')
  backBtn.textContent = 'Back'
  backBtn.onclick = createCards

  let title = document.createElement('h1')
  title.textContent = `${galleryName} Photos`
  title.style.color = 'white'
  title.style.fontSize = '30px'
  title.style.letterSpacing = '6px'

  buttonArea.appendChild(title)
  buttonArea.appendChild(backBtn)
  document.querySelector('.gallery').insertBefore(buttonArea, photoArea)

  imgObj[galleryName].forEach((currentImage, index) => {
    let newImg = document.createElement('img')
    newImg.setAttribute('id', `pic-${index + 1}`)
    newImg.src = currentImage
    newImg.classList.add('image-fade')
    newImg.style.animationDelay = `${index}s`
    newImg.classList.add('image')
    photoArea.appendChild(newImg)
  })

}

function createCards() {
  photoArea.classList.remove('images')
  photoArea.classList.add('photo-section')
  if (document.querySelector('.button-area')) {
    document.querySelector('.button-area').remove()
  }
  document.querySelectorAll('.image').forEach(image => {
    image.remove()
  })
  let selectionText = document.createElement('p')
  selectionText.style.color = 'white'
  selectionText.style.fontSize = '20px'
  selectionText.textContent = 'Select A Category to View Images'
  document.querySelector('.gallery').insertBefore(selectionText, photoArea)

  typesOfPhotos.forEach((photoType, index) => {
    let newPhotoCardDiv = document.createElement('div')
    newPhotoCardDiv.classList.add('type-card')
    newPhotoCardDiv.setAttribute('id', photoType.title)
    let cardTitle = document.createElement('h1')
    let cardImg = document.createElement('img')
    let viewBtn = document.createElement('button')
    cardTitle.textContent = photoType.title
    cardTitle.classList.add('type-card-h1')
    cardImg.src = photoType.image
    cardImg.classList.add('type-card-img')
    viewBtn.textContent = `View ${photoType.title} Photos`
    viewBtn.classList.add('type-card-button')
    viewBtn.onclick = displayImages
    newPhotoCardDiv.appendChild(cardTitle)
    newPhotoCardDiv.appendChild(cardImg)
    newPhotoCardDiv.appendChild(viewBtn)
    photoArea.appendChild(newPhotoCardDiv)
  })

}

createCards()

