document.addEventListener('DOMContentLoaded', ()=>{
  const h1 = document.querySelector('h1')
  h1.addEventListener("mouseover", ()=>{
    if(h1.style.color !== "green"){
      h1.style.color = "green"
    }else{
      h1.style.color= "blue"
    }
  })
      
  let img = document.querySelector('#img');
  function change(){
      if(img.src !== "https://i.imgur.com/8Ba9n5K.jpg"){
        img.src = "https://i.imgur.com/8Ba9n5K.jpg"
      }else{
      img.src = "https://i.imgur.com/4qMZueg.jpg"
      }
  }
  
  img.addEventListener("mouseover", change )

  // function change(){
  //   // let img = document.querySelector('#img');
  //     if(img.src !== "https://i.imgur.com/8Ba9n5K.jpg"){
  //       img.src = "https://i.imgur.com/8Ba9n5K.jpg"
  //     }else{
  //     img.src = "https://i.imgur.com/4qMZueg.jpg"
  //     }
  // }
  // img.addEventListener("mouseover", e =>{
  //   e.preventDefault()
  //   change()
  // })

  
})