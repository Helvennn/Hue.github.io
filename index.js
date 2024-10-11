const body = document.getElementsByTagName('body')[0];
const button = document.querySelector('div.button');
const buttonbg = document.querySelector('div.bg2');

let pressTime = 3;
let mouseTimer;
let slider = false

function mouseUp(){
    if (mouseTimer) window.clearTimeout(mouseTimer);
    button.style.transition = '0.1s ease';
    buttonbg.style.transition = '0.1s ease';
};

button.addEventListener('mousedown', function(){
    mouseUp();
    const circle = document.querySelector('.circle');
    let stat = circle.classList.contains('block');
    if(!stat){
        button.style.transition = pressTime+'s ease';
        buttonbg.style.transition = pressTime+'s ease';
    }
    mouseTimer = window.setTimeout(function(){
        button.style.transition = '0.1s ease';
        buttonbg.style.transition = '0.1s ease';
        body.classList.add('colored');
        circle.classList.add('block');
        let stat = circle.classList.contains('block');
        if(stat && !slider){
            button.firstElementChild.innerHTML = "Randomize"; 
            body.style.backgroundColor = 'rgb(50,50,50)';
            const sliderR = document.createElement('input');
            const sliderG = document.createElement('input');
            const sliderB = document.createElement('input');
            sliderR.setAttribute('type', 'range');
            sliderR.classList.add('redSlider');
            sliderR.classList.add('slider');
            sliderR.setAttribute('min', '0');
            sliderR.setAttribute('max', '255');
            sliderG.setAttribute('type', 'range');
            sliderG.classList.add('grnSlider');
            sliderG.classList.add('slider');
            sliderG.setAttribute('min', '0');
            sliderG.setAttribute('max', '255');
            sliderB.setAttribute('type', 'range');
            sliderB.classList.add('bluSlider');
            sliderB.classList.add('slider');
            sliderB.setAttribute('min', '0');
            sliderB.setAttribute('max', '255');
            button.before(sliderB);
            sliderB.before(sliderG);
            sliderG.before(sliderR);
            setTimeout(function(){
                sliderR.style.opacity = '1';
                sliderG.style.opacity = '1';
                sliderB.style.opacity = '1';
            }, 500);
            sliderR.addEventListener('input', function(){
                const Rvalue = sliderR.value;
                const Gvalue = sliderG.value;
                const Bvalue = sliderB.value;
                body.style.backgroundColor = 'rgb('+Rvalue+','+Gvalue+','+Bvalue+')';
            });
            sliderG.addEventListener('input', function(){
                const Rvalue = sliderR.value;
                const Gvalue = sliderG.value;
                const Bvalue = sliderB.value;
                body.style.backgroundColor = 'rgb('+Rvalue+','+Gvalue+','+Bvalue+')';
            });
            sliderB.addEventListener('input', function(){
                const Rvalue = sliderR.value;
                const Gvalue = sliderG.value;
                const Bvalue = sliderB.value;
                body.style.backgroundColor = 'rgb('+Rvalue+','+Gvalue+','+Bvalue+')';
            });
            button.addEventListener('click', function(){
                const r = Math.round(Math.random()*255);
                const g = Math.round(Math.random()*255);
                const b = Math.round(Math.random()*255);
                body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
                sliderR.value = r;
                sliderG.value = g;
                sliderB.value = b;
            });
            slider = true
        }else {
            // button.firstElementChild.innerHTML = "Press";
            // const sliderR = document.getElementsByClassName('redSlider')[0];
            // sliderR.remove();
            // const sliderG = document.getElementsByClassName('grnSlider')[0];
            // sliderG.remove();
            // const sliderB = document.getElementsByClassName('bluSlider')[0];
            // sliderB.remove();
        }
    }, pressTime * 1000);
});

body.addEventListener('mouseup', mouseUp);