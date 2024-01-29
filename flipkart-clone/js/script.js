const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
})

const images = document.querySelectorAll('.images');
let index = 0;

function slider() {
  images[index].classList.remove('active');
  index++;
  if (index === images.length) {
    index = 0;
  }
  images[index].classList.add('active');
}

setInterval(slider, 5000);


var indexValue = 1;
    showImg(indexValue);
    function btm_slide(e){showImg(indexValue = e);}
    function side_slide(e){showImg(indexValue += e);}
    function showImg(e){
      var i;
      const img = document.querySelectorAll('.images img');
      const slider = document.querySelectorAll('.btm-slides span');
      if(e > img.length){indexValue = 1}
      if(e < 1){indexValue = img.length}
      for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
      }
      for(i = 0; i < slider.length; i++){
        slider[i].style.background = "rgba(255,255,255,0.1)";
      }
      img[indexValue-1].style.display = "block";
      slider[indexValue-1].style.background = "white";
    }