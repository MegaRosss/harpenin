// const progressBar = document.getElementsByClassName('progress-bar')[0]
// let loader = document.getElementById('loader')


// setInterval(() => {
//   const computedStyle = getComputedStyle(progressBar)
//   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    // progressBar.style.setProperty("display"+"none")

//   progressBar.style.setProperty('--width', width + .1)
//   window.addEventListener(load, ()=>{
//     loader.style.display = "none"
// })

// }, 5)
//  this is for the effect on the active link on  event bar
const eventatt = document.getElementById("navatt")
const eventhost = document.getElementById("navhost")
let activePage = window.location.pathname
const navLinks = [eventatt, eventhost].forEach(link => {if (link.href.includes(`${activePage}`)){link.classList.add("active")}})

const modal = document.querySelector('.modal')
const menu = document.getElementById('menu')
const clmenu = document.getElementById('closebtn')
menu.addEventListener('click',()=>{modal.showModal()})
clmenu.addEventListener('click',()=>{modal.close()})

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
    if(item.classList.contains("selected")){
        this._deselect(item)
    }
    else{
        this._select(item)
    }
 })

 })

 this.originalSelect.insertAdjacentElement('afterend', this.customSelect)
 this.originalSelect.style.display = "none"
    }

    _select(item){
        const index = Array.from(this.customSelect.children).indexOf(item)

        this.originalSelect.querySelectorAll('option')[index].selected = true
        item.classList.add("selected")


    }
    _deselect(item){

        const index = Array.from(this.customSelect.children).indexOf(item)

        this.originalSelect.querySelectorAll('option')[index].selected = false
        item.classList.remove("selected")


    }

}

document.querySelectorAll('.customselect').forEach(selectelement => {
    new CustomSelect(selectelement)
    
});