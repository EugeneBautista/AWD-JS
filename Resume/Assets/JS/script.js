document.getElementById('changeColorButton').addEventListener('click', function() {
    const body = document.body;
    const header = document.querySelector('header');
    
  
    const currentBodyColor = body.style.backgroundColor || getComputedStyle(body).backgroundColor;
    const newBodyColor = currentBodyColor === 'rgb(255, 255, 255)' || currentBodyColor === '' ? '#B2BEB5' : '#ffffff';
  

  
    body.style.backgroundColor = newBodyColor;
    


  });
