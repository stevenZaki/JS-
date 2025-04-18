const chceckbox = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

function handleCheck(x){
    let inBetween = false
    
    if(x.shiftkey && this.Checked){
        chceckbox.forEach(chceckbox => {
            console.log(chceckbox);
        })
    }

    lastChecked = this;
    // return;
}

chceckbox.forEach(chceckbox => chceckbox.addEventListener('click', handleCheck))