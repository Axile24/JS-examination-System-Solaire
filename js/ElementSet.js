//Module containing all DOM elements that we at any point access in our js

const planetFigures = document.querySelectorAll('.solar-system__planet')
const sunSlice = document.querySelector('.sun-slice')

//
const overlay = {
    modal: document.querySelector('.layer'),
    title: document.querySelector('.layer__title'),
    subTitle: document.querySelector('.layer__subtitle'),
    description: document.querySelector('.layer__pl-desc'),
    circumference: document.querySelector('.layer__pl-circ'),
    distance: document.querySelector('.layer__pl-dist'),
    maxTemp: document.querySelector('.layer__pl-max-temp'),
    minTemp: document.querySelector('.layer__pl-min-temp'),
    moonList: document.querySelector('.layer__moons-list')        
}

const planetSlices = {
    outer: document.querySelector('.pl-slice__layer--outer'),
    middle: document.querySelector('.pl-slice__layer--middle'),
    inner: document.querySelector('.pl-slice__layer--inner')
}



export {planetFigures, sunSlice, overlay, planetSlices}