const progressBar = document.getElementsByClassName('progress-bar')[0]
let loader = document.getElementsByClassName('loader')
let loaderbg = document.getElementById('loaderbg')
  window.addEventListener('load', ()=>{
  loaderbg.style.display = "none"
  console.log("pagelloaded")
})


  
// this is the form submission

// let cta = document.getElementById('cta');
// let email = document.getElementById('email');
// let error = document.getElementById('error');
// let sucess = document.getElementById('sucess');
// let signup = document.getElementById('cta');

// cta.addEventListener('click',(event)=>{
//  event.preventDefault
//  if ( this.email.value==null|| this.email.value==""){
//   error.classList.add('erroractive')
  
// }
// else{
//     let fecthData = {
//       method: 'POST',
//       body: JSON.stringify({email:this.email.value, js:true}),
//       headers: { "content-type": "application/json"}
//     }
//  fetch('/subscribe', fecthData)
//  .then(res=>{
//   if (res.ok){
//     //yay
//   }
//   else{
//     error.classList.add('erroractive')
//   }
//  })


//  }
// })


// this is the code for the multiple select area

class CustomSelect{
    constructor(originalSelect){
 this.originalSelect =originalSelect
 this.customSelect = document.createElement('div')
 this.customSelect.classList.add('select')
 this.originalSelect.querySelectorAll("option").forEach(option=>{
    const item = document.createElement('div')
 item.classList.add('selectitem')
 item.textContent = option.textContent
 this.customSelect.appendChild(item )
 item.addEventListener("click", ()=>{
    if(item.classList.contains("selected")){this._deselect(item)}
    else{this._select(item)}})})
 this.originalSelect.insertAdjacentElement('afterend', this.customSelect)
 this.originalSelect.style.display = "none"}
    _select(item){const index = Array.from(this.customSelect.children).indexOf(item)
        this.originalSelect.querySelectorAll('option')[index].selected = true
        item.classList.add("selected")}
    _deselect(item){const index = Array.from(this.customSelect.children).indexOf(item)
 this.originalSelect.querySelectorAll('option')[index].selected = false
item.classList.remove("selected")}}
document.querySelectorAll('.customselect').forEach(selectelement => {new CustomSelect(selectelement)});
//  this is for the effect on the active link on  event bar
const eventatt = document.getElementById("navatt")
const eventhost = document.getElementById("navhost")
let activePage = window.location.pathname
const navLinks = [eventatt, eventhost].forEach(link => {if (link.href.includes(`${activePage}`)){link.classList.add("active")}})

// this for the modal

// this for the first modal 
const menu = document.getElementById('menu')
const modal = document.querySelector('.modal')
const clmenu = document.getElementById('closebtn')
menu.addEventListener('click',()=>{modal.showModal()})
clmenu.addEventListener('click',()=>{modal.close()})
// this is for the second modal
const menu2 = document.getElementById('menu2')
const menu_2 = document.getElementById('menu_2')
const clmenu2 = document.getElementById('closebtn2')
const modal2 = document.querySelector('.modal2')
menu2.addEventListener('click',()=>{modal2.showModal()})
menu_2.addEventListener('click',()=>{modal2.showModal()})
clmenu2.addEventListener('click',()=>{modal2.close()})
// this is the third modal in the page
const menu3 = document.querySelector('.menu3')
const modal3 = document.querySelector('.modal3')
const clmenu3 = document.getElementById('closebtn3')
menu3.addEventListener('click',()=>{modal3.showModal()})
clmenu3.addEventListener('click',()=>{modal3.close()})
// this is for the fourth modal
const menu4 = document.getElementById('menu4')
const menu_4 = document.getElementById('menu_4')
const modal4= document.querySelector('.modal4')
const clmenu4 = document.getElementById('closebtn4')
menu4.addEventListener('click',()=>{modal4.showModal()})
menu_4.addEventListener('click',()=>{modal4.showModal()})
clmenu4.addEventListener('click',()=>{modal4.close()})
// this is the slide show

const sShow = document.getElementById('sShow')
const menu5= document.querySelector('.menu5')
const menu6= document.querySelector('.menu6')
const menu7= document.querySelector('.menu7')
const clmenu5 = document.getElementById('closebtn5')
menu5.addEventListener('click',()=>{sShow.showModal()})
menu6.addEventListener('click',()=>{sShow.showModal()})
menu7.addEventListener('click',()=>{sShow.showModal()})
clmenu5.addEventListener('click',()=>{sShow.close()})
// this is the code for the slide show
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " actives";
} 
// // this is the slide show

// const sShow1 = document.getElementById('sShow1')
// const menu6= document.querySelector('.menu6')
// const clmenu6 = document.getElementById('closebtn6')
// menu6.addEventListener('click',()=>{sShow1.showModal()})
// clmenu6.addEventListener('click',()=>{sShow1.close()})
// // this is the code for the slide show
// let slide1Index = 1;
// showSlides(slide1Index);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slide1Index += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slide1Index = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.querySelectorAll(".mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slide1Index = 1}
//   if (n < 1) {slide1Index = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" actives", "");
//   }
//   slides[slide1Index-1].style.display = "block";
//   dots[slide1Index-1].className += " actives";
// } 

// this is a function too add the animate on scroll 
const observer = new IntersectionObserver(
  (entries)=>{entries.forEach((entry)=>{entry.isIntersecting?entry.target.classList.add('show'):entry.target.classList.remove('show')})})
const hiddenElements = document.querySelectorAll(".hiddenscroll")
hiddenElements.forEach((el) => observer.observe(el))
// this is the function for the animation too happen once
const oneobserver = new IntersectionObserver(
  (entries)=>{entries.forEach((entry)=>{
    // entry.isIntersecting?entry.target.classList.add('show')
    if(entry.isIntersecting){entry.target.classList.add('show')}})})
const hiddenElements1 = document.querySelectorAll(".hiddenscroll1")
hiddenElements1.forEach((el) => oneobserver.observe(el))



//This is the code for the interactive mouse-following section

const scrollingDiv = document.querySelector('.scrolling-block')
const borderAreaCont = document.querySelector('.boderarea-container')

const Mousemove = (e) => {
  scrollingDiv.style.left = e.pageX + 'px';
  // scrollingDiv.style.
  scrollingDiv.style.opacity = '1';

}
const Mouseout = (e) => {
  scrollingDiv.style.left = e.pageX + 'px';
  // scrollingDiv.style.
  scrollingDiv.style.opacity = '0';

}
borderAreaCont.addEventListener('mousemove', Mousemove);

borderAreaCont.addEventListener('mouseout', Mouseout)

