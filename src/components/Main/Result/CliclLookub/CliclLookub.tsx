
  const cliclLookub = (props:any,event:any) => {
    let left = 0;
    let top = 0;
    let selectedText:any
    let tooltipBtn = document.getElementById('tooltip')!
    tooltipBtn.style.visibility = 'visible'
    selectedText = getSelection()!.getRangeAt(0).toString();
    selectedText = selectedText.replace(/[\W_]/g,"")  
    if(selectedText.length>0)props.setInput(selectedText)
    if(event.type === 'touchend'){
      left = event.changedTouches[0].pageX
      top = event.changedTouches[0].pageY
      if(tooltipBtn && selectedText.length>0){        
        tooltipBtn.style.left = left-20+'px'
        tooltipBtn.style.top = top-60+'px'
      }
    }
    if(event.type === 'mouseup'){
      left = event?.pageX
      top = event?.pageY      
      tooltipBtn!.style.left = left-15+'px'
      tooltipBtn!.style.top = top-50+'px'
    }
    if(selectedText.length ===0 && tooltipBtn) return tooltipBtn!.style.visibility = 'hidden'
    
  }
  export default cliclLookub;