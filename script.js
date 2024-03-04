

    var sidemeu =document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right="0";
    }

    function closemenu(){
        sidemeu.style.right="-200px";
    }




    const scriptURL = 'https://script.google.com/macros/s/AKfycbw1d3zUMLpHu5fEmD6A3BrdyvgIFLMl8BEBoMn_eBB2IkOL1fhycd5ZkFkIn80GT6tX/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function()  {
                msg.innerHTML=""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  