
const  list = document.querySelectorAll('.item');
const  prev = document.querySelector('#prev');
const  next = document.querySelector('#next');


let  count = list.length
let  active = 0;


next.addEventListener('click', () => {

    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active');
    
    
});

prev.addEventListener('click', () => {

    let  activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    
    active = active <= 0 ? count -1 : active -1
    list[active].classList.add('active');
    
    
    });
    