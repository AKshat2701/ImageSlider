let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextkBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (evt) =>  {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = 'auto';
});

nextkBtn.addEventListener('click', ()=> {
    scrollContainer.style.scrollBehaviour = 'smooth';
    scrollContainer.scrollleft += 900;
});

backBtn.addEventListener('click', ()=> {
    scrollContainer.style.scrollBehaviour = 'smooth';
    scrollContainer.scrollLeft -= 900;
})