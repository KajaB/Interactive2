window.addEventListener('resize',pageResized)


function pageResized(){
  console.log(window.innerHeight, window.innerWidth)
  
//   uncomment this to see the font size resize based on how tall the window is
  
//   let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100
  
//   let colorFromScreenHeight = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
//   console.log(colorFromScreenHeight)
//   document.body.style.color = colorFromScreenHeight
  
}

pageResized()