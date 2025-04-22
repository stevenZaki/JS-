






const pressed =[]
const secreCode = 'wesbos'



window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    pressed.splice( 0, pressed.length - 6 );
    
    // pressed.splice(
    //     -secretCode.length - 1,
    //     pressed.length - secretCode.length
    //   );

    
    if(pressed.join('').includes(secreCode)) {
        console.log('DING DING!');
        cornify_add();
    
    }

    console.log(pressed);


})