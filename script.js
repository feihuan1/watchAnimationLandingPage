const toggle = document.querySelector('.toggle')
const banner = document.querySelector('.banner')
const modal = document.querySelector('dialog')
modal.showModal()


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    banner.classList.toggle('active');

})