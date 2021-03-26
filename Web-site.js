document.addEventListener('DOMContentLoaded', ()=>{
  const h1 = document.querySelector('h1')
  h1.addEventListener("mouseover", ()=>{
    if(h1.style.color !== "green"){
      h1.style.color = "green"
    }else{
      h1.style.color= "blue"
    }
  })
      

  function change(){
    let img = document.querySelector('#img');
      if(img.src !== "https://i.imgur.com/8Ba9n5K.jpg"){
        img.src = "https://i.imgur.com/8Ba9n5K.jpg"
      }else{
      img.src = "https://i.imgur.com/4qMZueg.jpg"
      }
  }
  
  // Where is img defined?
  // simpler version: img.addEventListener("mouseover", change)
  img.addEventListener("mouseover", ()=>{change()})

  
})
