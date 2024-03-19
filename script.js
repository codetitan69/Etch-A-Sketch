// Draw in sketch on Mouse hover

let Sketch_Container = document.querySelector(".Sketch-Container");

let container_Resolution = getComputedStyle(document.body).getPropertyValue("--Sketch-Resolution");

let Sketch_color = getComputedStyle(document.body).getPropertyValue("--Pen-Color");

let Root = document.querySelector(':root');

function bgEvent() {
    this.style.background = Sketch_color;
}

function fillSketch(res) {
    
    for (let i = 1;i <= res ** 2; i++) {
        let containerPixel = document.createElement("div");
            
        containerPixel.addEventListener("mouseover" ,bgEvent)

        Sketch_Container.appendChild(containerPixel);
    }
}

fillSketch(container_Resolution)

// Set Resolution

let Resolution_Option_btns = document.querySelectorAll(".resolutionOptions a");

for (let i of Resolution_Option_btns){
    i.addEventListener('click',() => {
        Sketch_Container.innerHTML = ""

        container_Resolution = i.dataset.resolution
        Root.style.setProperty('--Sketch-Resolution',container_Resolution)

        fillSketch(container_Resolution)
    })
}

// GreyScale Mode

let GreyScale = document.querySelector('.GreyScale')

GreyScale.addEventListener('click',() => {
    let Sketch_Container_Pixels = document.querySelectorAll(".Sketch-Container div")

    Sketch_Container.dataset.greyScale = "yes"

    for (let i of Sketch_Container_Pixels) {
        i.style.backgroundColor = `rgb(${255},${255},${255})`     
        i.removeEventListener('mouseover',bgEvent)


        i.addEventListener('mouseover',(e) => {
            let a = e.target.style.backgroundColor
            let red = a.slice(4,7)
            let green = a.slice(8,12)
            let blue = a.slice(13,17)

            e.target.style.backgroundColor = `rgb(${red - 25},${green - 25},${blue - 25})`
        })
    }
})

// Clear

let Clear = document.querySelector(".controls .Clear")

Clear.addEventListener('click',() => {
    let Sketch_Container_Pixels = document.querySelectorAll(".Sketch-Container div")

    for (let i of Sketch_Container_Pixels) {
        i.style.background = 'white'
    }
})

// Random Mode

let Random_btn = document.querySelector(".controls .Random")

Random_btn.addEventListener('click',() => {
    let Sketch_Container_Pixels = document.querySelectorAll(".Sketch-Container div")

    Sketch_Container.dataset.greyScale = "yes"

    for (let i of Sketch_Container_Pixels) {
        i.style.backgroundColor = `hsl(${255},${255},${255})`     
        i.removeEventListener('mouseover',bgEvent)


        i.addEventListener('mouseover',(e) => {
            let new_red = Math.floor(Math.random() * 255);
            let new_green = Math.floor(Math.random() * 255);
            let new_blue = Math.floor(Math.random() * 255);

            e.target.style.backgroundColor = `rgb(${new_red},${new_green},${new_blue})`
        })
    }
})