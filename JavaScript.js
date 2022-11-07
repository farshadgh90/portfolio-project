let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let area = document.getElementById('area');
let char = document.getElementById('char');
let word = document.getElementById('word');
  
area.addEventListener('input', function () {
    // count characters 
    let content = this.value;
    char.textContent = content.length;
  
    // remove empty spaces from start and end 
    content.trim();
    console.log(content);
  
    let wordList = content.split(/\s/);
  
    // Remove spaces from between words 
    let words = wordList.filter(function (element) {
        return element != "";
    });
  
    // count words 
    word.textContent = words.length;
});