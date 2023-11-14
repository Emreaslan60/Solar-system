const header=document.querySelector('h1')
const input=document.getElementById('input')
const select=document.getElementById('select')
const btn=document.getElementById('button')
const container=document.querySelector('.container')
const flex_container=document.querySelector('.flex-container')
const img_container=document.querySelector('.img-container')
const img=document.getElementById('image')
const content =document.getElementById('content')

document.body.style.backgroundImage= "url('./gezegenler/galaxy.gif')"

header.style.color='white'
header.style.textAlign='center'

container.style.display='flex'
container.style.justifyContent='center'
container.style.alignItems='center'
container.style.gap='20px'


flex_container.style.display='flex'
flex_container.style.justifyContent='center'
flex_container.style.alignItems='center'
flex_container.style.margin='50px auto'
flex_container.style.gap='20px'
flex_container.style.padding='30px'
flex_container.style.backgroundColor="rgba(255,255,255,0.1)" 
input.style.width='150px'
input.style.height='30px'
select.style.width='150px'
select.style.height='30px'
btn.style.width='150px'
btn.style.height='30px'


content.style.color='white'
content.style.fontSize='20px'

btn.addEventListener('click',function(){
   let kilo=Number(input.value)
   kilo/=9.81
   let gezegen=select.value
   let sonuc=0

   if(input.value.trim()!='' && select.value !='bir gezegen seç' && !isNaN(input.value)){
    if(gezegen =='earth'){
        img.setAttribute('src','./gezegenler/thumbnail_earth.png')
        sonuc=kilo*9.81
    }else if(gezegen=='jupiter'){
        img.setAttribute('src','./gezegenler/thumbnail_jupiter.png')
        sonuc=kilo*24.8
    }else if(gezegen=='mars'){
        img.setAttribute('src','./gezegenler/thumbnail_mars.png')
        sonuc=kilo*3.7
    }else if (gezegen=='mercury'){
        img.setAttribute('src','./gezegenler/thumbnail_mercury.png')
        sonuc=kilo*3.7
    }
    else if (gezegen=='moon'){
        img.setAttribute('src','./gezegenler/thumbnail_moon.png')
        sonuc=kilo*1.6
    }
    else if (gezegen=='neptune'){
        img.setAttribute('src','./gezegenler/thumbnail_neptune.png')
        sonuc=kilo*11.15
    }
    else if (gezegen=='pluto'){
        img.setAttribute('src','./gezegenler/thumbnail_pluto.png')
        sonuc=kilo*0.62
    }else if (gezegen=='saturn'){
        img.setAttribute('src','./gezegenler/thumbnail_saturn.png')
        sonuc=kilo*10.44
    }else if (gezegen=='uranus'){
        img.setAttribute('src','./gezegenler/thumbnail_uranus.png')
        sonuc=kilo*8.87
    }else if (gezegen=='venus'){
        img.setAttribute('src','./gezegenler/thumbnail_venus.png')
        sonuc=kilo*8.87
    }

    content.innerHTML=`seçmiş olduğunuz gezegen: <span>${gezegen}</span> ve bu gezegendeki ağırlığınız: <span>${sonuc.toFixed(2)}kg</span>`

        
     }else{content.textContent='kilonu sayıyla gir bir gezegen seçtiğinden emin ol'
    
    }   
})

