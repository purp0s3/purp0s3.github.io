window.addEventListener('load', function() {
    const btnLGPD = document.querySelector('.lgpd-btn');
    const boxLGPD = document.querySelector('.lgpd');
    console.log(btnLGPD);
    if(sessionStorage.lbpd){
        boxLGPD.style.display = 'none';
    }else{
        boxLGPD.style.display = 'block';
    }
    btnLGPD.addEventListener('click', function(){
    sessionStorage.setItem("lbpd", 'ok');
    boxLGPD.style.display = 'none';
    })
})