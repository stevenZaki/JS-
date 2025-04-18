const dogs = [
    {name: 'Snickers', age: 2 },
    {name: 'hugo', age: 8 },
]

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55'
    p.style.fontSize = '50px';
}


    // Regular
        console.log('hello');

    // Interpolated
        console.log('Hello I am %s from EG', 'steven');

    // Styled
        console.log('%c Styling ', 'background: red; font-size:30px');

    // warning!
        console.warn(' Oh NOOO !');

    // Error :|
        console.error(' Ufff Error !');

    // Info
        console.info('important info : you are beautiful');

    // Testing
        console.assert(1 === 2, ' That is wrong '); 

    // clearing
        // console.clear()


    // Viewing DOM Elements
        const p = document.querySelector('p');
        console.log(p)
        console.dir(p);


    // Grouping together
        dogs.forEach(dog => {
            console.groupCollapsed(`${dog.name}`)
            console.log(`This is ${dog.name}`)
            console.log(`${dog.name} is ${dog.age} Years Old`)
            console.groupEnd(`${dog.name}`)  
        })


    // counting
        console.count('wes')
        console.count('steve')
        console.count('wes')
        console.count('steve')
        console.count('stev')
        console.count('steve')
        console.count('wes')
        console.count('steve')
        console.count('steve')
        console.count('steve')
        console.count('wes')
        console.count('wes')
        console.count('steve')
        console.count('steve')
        console.count('wes')

        
    // timing

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos/')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data);
        })

