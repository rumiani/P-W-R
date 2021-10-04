
  const cliclLookub = (props:any,event:any) => {
      let left = 0;
      let top = 0;
      let selectedText:any
      let tooltipBtn = document.getElementById('tooltip')
    selectedText = getSelection()!.getRangeAt(0).toString();
    selectedText = selectedText.replace(/[\W_]/g,"")    
    if(selectedText.length>0)props.setInput(selectedText)
    left = event.pageX
    top = event.pageY
    if(tooltipBtn && selectedText.length>0){
        tooltipBtn.style.left = left-15+'px'
        tooltipBtn.style.top = top-50+'px'
        tooltipBtn.style.display = 'inline'
    }
    if(selectedText.length ===0 && tooltipBtn)tooltipBtn!.style.display = 'none'
    
  }
  export default cliclLookub;