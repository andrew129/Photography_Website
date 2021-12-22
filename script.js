let currentIndex = 0;
let imageTag = document.querySelector(".bio-img");
let photoArea = document.querySelector('.all-photos')
let timer;

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

$(function () {
  $(".toggle-menu a").click(function (e) {
    e.preventDefault();
    $(".right-nav").toggleClass("toggleNav");
  });
});

$('.nav-link').click(function(e) {
  $('.right-nav').toggleClass('toggleNav')
})

function displayImages() {
  window.location.href = '#gallery'
  let galleryName = this.textContent.split(' ')[1]
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
  window.location.href = '#gallery'
  photoArea.classList.remove('images')
  // window.scrollTo(500,0)
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

  typesOfPhotos.forEach(photoType => {
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

