const chceckbox = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

function handleCheck(x){
    let inBetween = false;

    if(x.shiftkey && this.checked){
        chceckbox.forEach(chceckbox => {
            console.log(chceckbox);
        })
    }

    lastChecked = this;
}




// function handleCheck(e) {
//     // Check if they had the shift key down
//     // AND check that they are checking it
//     let inBetween = false;
//     if (e.shiftKey && this.checked) {
//       // go ahead and do what we please
//       // loop over every single checkbox
//       checkboxes.forEach(checkbox => {
//         console.log(checkbox);
//     })
//         }
    
//         lastChecked = this;
//     }

chceckbox.forEach(chceckbox => chceckbox.addEventListener('click', handleCheck))