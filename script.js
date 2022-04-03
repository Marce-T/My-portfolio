const myFunction = () => {
    console.log('i`m here');
    const x = document.getElementById('myLinks');
    if(x.style.display === 'block') {
        x.style.display =  'none'
    } else {
        x.style.display = 'block';
    }

}