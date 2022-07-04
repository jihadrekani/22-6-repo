document.getElementById('resize')

function resize() {
    let url = document.getElementById('url').value;
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    
  
    /* only returns index number of last occurence of the forward slash : 27 */
    let lastIndex = url.lastIndexOf('/');
    
    let lastPart = url.substring(lastIndex);
     let generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;
  
    //  alert(generatedUrl);
  
    // https://unsplash.com/photos/mASiL-TP0eU
    // https://source.unsplash.com/mASiL-TP0eU/heightxwidth
   

    //make image visible once we have the url generated
   let ourImage = document.getElementById('ourImage');
   ourImage.src = `${generatedUrl}`
   ourImage.style.display = 'block';
   //make url placeholder appear once we have the url
   let urlDiv = document.getElementById('new-url')
   urlDiv.style.display = 'block';
   urlDiv.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
   <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
   <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
 </svg> ${generatedUrl}`;

}

function handlecopy(){
 // retrive the text from inside the element itself
 //copy that text to the clipboard
 let innerTxt = document.getElementById("new-url").innerText;
 copyToClipboeard(innerTxt);
}

//copy whatever passed to it to the clipboard
 function copyToClipboeard(text){
    navigator.clipboard.writeText(text).then(
        function(){
            console.log('succed')
        },
        function(err){
            console.error("un succed", err);
        }
    );
 }




   


 