const controlvolumefloresta=document.querySelector('#audioflorest')
const controlvolumechuva=document.querySelector('#audiochuv')
const controlvolumecafeteria=document.querySelector('#audiocafeteri')
const controlvolumelareira=document.querySelector('#audiolareir')
const playsonfloresta = document.querySelector(".floresta")
const playsonsonchuva = document.querySelector(".chuva img")
const playsoncafeteria = document.querySelector(".cafeteria")
const playsonlareira = document.querySelector(".lareira")
const audiofloresta = document.querySelector("#audiofloresta")
const audiochuva = document.querySelector("#audiochuva")
const audiocafeteria = document.querySelector("#audiocafeteria")
const audiolareira = document.querySelector("#audiolareira")
const btnchangemode = document.querySelector("#ligth")
const btnchangemodeligth = document.querySelector("#dark")
const barravolume = document.querySelector ('.volumeinput')
let controleintervalo=''
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
const botaoplay = document.querySelector("#botaoplay")
const botaostop = document.querySelector("#stopbotaos")
const botaoaddtime = document.querySelector("#botaoaddtime")
const botaoremovetime = document.querySelector("#botaoremovetime")

controlvolumefloresta.addEventListener('change',volumesom)
controlvolumechuva.addEventListener('change',volumesom)
controlvolumecafeteria.addEventListener('change',volumesom)
controlvolumelareira.addEventListener('change',volumesom)
btnchangemodeligth.addEventListener('click',changemodeligth)
btnchangemode.addEventListener('click',changemode)
botaoremovetime.addEventListener('click',removetime)
botaoaddtime.addEventListener('click',addtime)
botaostop.addEventListener('click',stoptimmer)
botaoplay.addEventListener('click',isnumber)
playsonfloresta.addEventListener('click',reproduzirson)
playsonsonchuva.addEventListener('click',reproduzirson)
playsoncafeteria.addEventListener('click',reproduzirson)
playsonlareira.addEventListener('click',reproduzirson)

function volumesom(event){
  if(event.target == controlvolumefloresta){
    audiofloresta.volume=this.value
  }else if(event.target == controlvolumechuva){
    audiochuva.volume=this.value
  }else if(event.target == controlvolumecafeteria){
    audiocafeteria.volume=this.value
  }else if(event.target == controlvolumelareira){
    audiolareira.volume=this.value
  }
}

function timmer(){
 
  let secondstratdo = Number(seconds.textContent)
  seconds.textContent = String(secondstratdo-1).padStart(2,'0')
 if(minutes.textContent <= 0 && seconds.textContent <= 0){
    clearInterval (controleintervalo)
    stoptimmer();
  } 
  else if (seconds.textContent <= 0){
    let minutestratados=Number(minutes.textContent)
    minutes.textContent =  String(minutestratados-1).padStart(2,'0')
    seconds.textContent=59
  }
}

function starttimmer(){
    //botaoplay.removeEventListener('click',isnumber)
    controleintervalo= setInterval(timmer,1000)
  }
  
function stoptimmer(){
  
  seconds.textContent= '00'
  minutes.textContent= '00'
  botaoplay.addEventListener('click',isnumber)
  clearInterval(controleintervalo)
}

function addtime(){
  let minutestratados=Number(minutes.textContent)
    minutes.textContent =  String(minutestratados+5).padStart(2,'0')
}

function removetime(){
  if(minutes.textContent< 5){
  alert('restam menos de 5 minutos')
  return
  }
  let minutestratados=Number(minutes.textContent)
    minutes.textContent =  String(minutestratados-5).padStart(2,'0')
}

function changemode(){
  let mudacor=document.querySelector("body")
  mudacor.style.backgroundColor = "black"
  minutes.style.color='white'
  seconds.style.color='white'
  document.querySelector('.floresta'). src ="./assets/icon-floresta-darkmode.svg"
  document.querySelector('.chuva'). src ="./assets/icon-chuva-darkmode.svg"
  document.querySelector('.cafeteria'). src ="./assets/icon-cafeteria-darkmode.svg"
  document.querySelector('.lareira'). src ="./assets/icon-fogueira-darkmode.svg"
  document.querySelector("#doispontos-display").style.color='white'
  document.body.style.setProperty('--bg-btnssons','#29292E')
  botaoplay.src ="./assets/play-darkmode.svg"
  botaostop .src ="./assets/stop-darkmode.svg"
  botaoaddtime.src ="./assets/add-darkmode.svg"
  botaoremovetime.src ="./assets/remove-darkmode.svg"
  btnchangemode.style.display='none'
  barravolume.classList.remove('volumeinput')
  controlvolumecafeteria.classList.remove('volumeinput')
  controlvolumelareira.classList.remove('volumeinput')
}

function changemodeligth(){
  let mudacor=document.querySelector("body")
  mudacor.style.backgroundColor = "white"
  minutes.style.color='#323238'
  seconds.style.color='#323238'
  document.querySelector('.floresta'). src ="./assets/floresta.svg"
  document.querySelector('.chuva'). src ="./assets/chuva.svg"
  document.querySelector('.cafeteria'). src ="./assets/btncafeteria.svg"
  document.querySelector('.lareira'). src ="./assets/fogueira.svg"
  document.querySelector("#doispontos-display").style.color='#323238'
  document.body.style.setProperty('--bg-btnssons','#E1E1E6')
  botaoplay.src ="./assets/play.svg"
  botaostop .src ="./assets/stop.svg"
  botaoaddtime.src ="./assets/mais.svg"
  botaoremovetime.src ="./assets/menos.svg"
  btnchangemode.style.display='flex'
  barravolume.classList.add('volumeinput')
  controlvolumecafeteria.classList.add('volumeinput')
  controlvolumelareira.classList.add('volumeinput')

}

function reproduzirson(event){
  if(event.target == playsonfloresta){
    audiofloresta.play()
    audiochuva.pause()
    audiolareira.pause()
    audiocafeteria.pause()
  }else if(event.target == playsonsonchuva){
    audiofloresta.pause()
    audiochuva.play()
    audiolareira.pause()
    audiocafeteria.pause()
  }else if(event.target == playsonlareira){
    audiofloresta.pause()
    audiochuva.pause()
    audiolareira.play()
    audiocafeteria.pause()
  }else if(event.target == playsoncafeteria){
    audiofloresta.pause()
    audiochuva.pause()
    audiolareira.pause()
    audiocafeteria.play()
  }
}

function isnumber() {
  if(minutes.textContent !== '00'){
    botaoplay.removeEventListener('click',isnumber)
    starttimmer()
  }
  else{
  let num= prompt('digite um tempo para o cronometro')
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(num)){
   minutes.textContent = num
   botaoplay.removeEventListener('click',isnumber)
   starttimmer();
  }else{
   alert('DIGITE UM VALOR VALIDO')
   botaoplay.addEventListener('click',isnumber)
   stoptimmer()
   
  }
  }
}




