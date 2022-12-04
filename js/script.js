
    let modalWin = document.querySelector ('.subscribe-button');
    let winUp = document.querySelector('.windows_up');
    let darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
   
    modalWin.addEventListener ('click', () => {
        console.log('clicked!!!!');
        winUp.style.display = 'block';
    })

    modalWin.addEventListener ('click', () =>  {
     document.body.appendChild(darkLayer);
    })


//    darkLayer.addEventListener ('click', () => {
//     darkLayer.parentNode.removeChild(darkLayer);
//     winUp.style.display = 'none';
//     return false;
//    })

   let closeWin = document.querySelector ('.button_up');
   let container = document.querySelector ('.container_text');

   closeWin.addEventListener ('click', () => {
    if (!container[i].value) {
        alert('Данные отправлены успешно!'); 
        darkLayer.parentNode.removeChild(darkLayer);
        winUp.style.display = 'none';     
    } else {
        console.log('ERORR!')
    }
   } 
   )
