const contextmenu = document.querySelector('.contianer');
const submenu = document.querySelector('.share-menu')
document.addEventListener('contextmenu' , (e)=>{
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;

    let winwidth = window.innerWidth;
    let winheight = window.innerHeight;

    let cmwidth = contextmenu.offsetWidth;
    let cmheight = contextmenu.offsetWidth;

    x = x > winwidth - cmwidth ? winwidth - cmwidth : x;
    y = y > winheight - cmheight ? winheight - cmheight : y;

    if(x > (winwidth - cmwidth - submenu.offsetWidth)){
        submenu.style.left = '-170px';
    }
    else{
        submenu.style.left = '260px';
    }

    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.visibility = 'visible'
})
document.addEventListener('click' , ()=>{
    contextmenu.style.visibility = 'hidden'
})