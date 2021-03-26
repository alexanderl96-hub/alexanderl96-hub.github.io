document.addEventListener('DOMContentLoaded', ()=>{
  let skills = document.getElementById('skills2');
  const paraskills = document.getElementById('paraskills')
  const forms = document.createElement('div')
  forms.className = 'cardAll'
  // Is there an event that might be more appropriate to listen for than a 'click' event?
  // Right now, I have to click the select box once AFTER choosing my selection to get the proper images to load.
  skills.addEventListener('click', ()=>{
    // I'd recommend brainstorming ways to refactor this function so that it doesn't rely on if/else blocks!
    if(skills.value === 'all'){
      // In the future, you should use document.createElement('img') and forms.appendChild() to add multiple images to a DOM node
      // Using innerHTML this way is pretty slow
      // The commas between tags is unnecessary.
      forms.innerHTML = `<img src= "images/react js.png">,<img src= "images/css.png">,
      <img src= "images/html.png">,<img src= "images/node .png">,<img src= "images/postgresql.jpeg">, 
      <img src= "images/javascript.png">, <img src= "images/auditio.png">,<img src= "images/photoshow.png">,
      <img src="images/gif/premierpro.jpeg"> `
      paraskills.appendChild(forms)
    }else if(skills.value === 'front'){
      forms.innerHTML = `<img src= "images/react js.png">,<img src= "images/css.png">,
      <img src= "images/html.png">`
      paraskills.appendChild(forms)
    }else if(skills.value === 'back'){
      forms.innerHTML = `<img src= "images/node .png">,<img src= "images/postgresql.jpeg">,  
      <img src= "images/javascript.png">`
      paraskills.appendChild(forms)
    }else if(skills.value === 'others'){
      forms.innerHTML = `<img src= "images/auditio.png">,<img src= "images/photoshow.png">,
      <img src="images/gif/premierpro.jpeg">`
      paraskills.appendChild(forms)
    }else{
      skills.value = ''
    }
    });
    
    
})
