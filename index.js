
// get item with class icon
const icon = document.querySelector('.icon')  

// onclick 

icon.addEventListener('click' , ()=>{
    const sidebar = document.querySelector('#sidebar')
    sidebar.classList.add('phone')
    sidebar.classList.remove('hidden');
})
