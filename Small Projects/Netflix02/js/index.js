

const tbaItems = document.querySelectorAll('.tab-items'); 
const tabContentItems = document.querySelectorAll('.tab-content-item')

// Select tab content item  

function selectItem(e){
    removeBorder();
    removeShow();

    // Add border to current tab 
    this.classList.add('tab-border');

    // Grab item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')
}

function removeBorder(){
    tbaItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for tab click
tbaItems.forEach(item  => item.addEventListener('click' ,selectItem));
