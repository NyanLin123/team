

function displayParag(i){
    const parag = document.querySelectorAll('.right .commandBox');
    parag.forEach((e)=>{e.style.display = 'none';});
    parag[i].style.display = 'block';
};

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.left .profileBox').forEach(function(e){
        e.onclick = function(){
            displayParag(e.dataset.index);
        };
    });
});