document.addEventListener('DOMContentLoaded', ()=>{
  let skills = document.getElementById('skills2');
  const paraskills = document.getElementById('paraskills')
  const forms = document.createElement('div')
  // const icons = [
  //   {src:"ultimos/1-react.png", display:'front'}, 
  //   {src:"ultimos/3-css.png", display:'front'},
  //   {src:"ultimos/2-html.png", display:'front'},
  //   {src:"ultimos/4-node.png", display:'back'},
  //   {src:"ultimos/5-postgresql.png", display:'back'},
  //   {src:"ultimos/8-photoshop.png", display:'others'},
  //   {src:"ultimos/7-premiere.png", display:'others'},
  //   {src:"ultimos/9-audition.png", display:'others'},
  //   {src:"ultimos/1-react.png", display:'all'},
  //   {src:"ultimos/2-html.png", display:'all'},
  //   {src:"ultimos/3-css.png", display:'all'},
  //   {src:"ultimos/4-.png", display:'all'},
  //   {src:"ultimos/9-audition.png", display:'all'},
  //   {src:"ultimos/9-audition.png", display:'all'},
  //   {src:"ultimos/9-audition.png", display:'all'},
  //   {src:"ultimos/9-audition.png", display:'all'},
  //   {src:"ultimos/9-audition.png", display:'all'},
  //   {src:"ultimos/6-js.png", display:'back'}]
  forms.innerHTML = `<img src= "ultimos/1-react.png"><img src= "ultimos/3-css.png">
  <img src= "ultimos/2-html.png"><img src= "ultimos/4-node.png"><img src= "ultimos/5-postgresql.png"> 
  <img src= "ultimos/6-js.png"> <img src= "ultimos/8-photoshop.png"><img src= "ultimos/9-audition.png">
  <img src="ultimos/7-premiere.png"> `
  paraskills.appendChild(forms)
  forms.className = 'cardAll'
  skills.addEventListener('change', ()=>{
    if(skills.value === 'front'){
      forms.innerHTML = `<img src= "ultimos/1-react.png"><img src= "ultimos/3-css.png">
      <img src= "ultimos/2-html.png">`
      cardAll.forEach(el => {
        el.style.height = '150px;'
      });
      // icons.forEach(el =>{
      //   if(el.display === 'front'){
      //     let img = document.createElement('img')
      //     img.src = el.src
      //     forms.appendChild(img)
      //   }else{
      //     img.innerHTML = ""
      //     forms.appendChild(img)
      //   }
      // })
      paraskills.appendChild(forms)
    }else if(skills.value === 'back'){
      forms.innerHTML = `<img src= "ultimos/4-node.png"><img src= "ultimos/5-postgresql.png"> 
      <img src= "ultimos/6-js.png">`
      // icons.forEach(el =>{
      //   if(el.display === 'back'){
      //     let img = document.createElement('img')
      //     img.src = el.src
      //     forms.appendChild(img)
      //   }else{
      //     img.innerHTML = ""
      //     forms.appendChild(img)
      //   } 
      // })
      paraskills.appendChild(forms)
    }else if(skills.value === 'others'){
      forms.innerHTML = `<img src= "ultimos/8-photoshop.png"><img src= "ultimos/9-audition.png">
      <img src="ultimos/7-premiere.png">`
      // icons.forEach(el =>{
      //   if(el.display === 'others'){
      //     let img = document.createElement('img')
      //     img.src = el.src
      //     forms.appendChild(img)
      //   }  
      // })
      paraskills.appendChild(forms)
    }else{
      forms.innerHTML= `<img src= "ultimos/1-react.png"><img src= "ultimos/3-css.png">
      <img src= "ultimos/2-html.png"><img src= "ultimos/4-node.png"><img src= "ultimos/5-postgresql.png"> 
      <img src= "ultimos/6-js.png"> <img src= "ultimos/8-photoshop.png"><img src= "ultimos/9-audition.png">
      <img src="ultimos/7-premiere.png"> `
      paraskills.appendChild(forms)
    }
    });
    
    
})