document.getElementById("tikla").addEventListener("click",function(){
    let text = document.getElementById("base64").value;
    coz = atob(text)
    let ptext = document.getElementById("donustur").innerHTML = coz;


});
   
    document.getElementById("tikla1").addEventListener("click",function(){
        let text = document.getElementById("base64").value;
        sifrele = btoa(text);
        let ptext = document.getElementById("donustur").innerHTML =  sifrele;

    });

  

 
  




