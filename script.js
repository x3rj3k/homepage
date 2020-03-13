const closeLightbox = document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img")

closeLightbox.addEventListener("click",function(){
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
})

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
  element.querySelector(".fa-plus").addEventListener("click",function(){
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImage.src=element.querySelector("img").getAttribute("src");
  })
})


/*scroll navigation bar*/

window.onscroll=function(){
  const docScrollTop = document.documentElement.scrollTop;
  if(window.innerWidth>991){
    if(docScrollTop>100){
      this.document.querySelector("header").classList.add("fixed")
    }
    else{
      this.document.querySelector("header").classList.remove("fixed");
    }
  }
}