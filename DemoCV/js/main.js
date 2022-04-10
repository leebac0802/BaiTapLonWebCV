var index = 1;
changeImage = function(){
    var imgs = ["https://cafefcdn.com/2019/8/22/edf-tempo-couleur-de-demain-la-edf-tempo-historique-couleur-jour-et-demain-15664469984471689659056.jpg","http://figarigroup.com/wp-content/uploads/2018/04/annie-spratt-604131-unsplash-1024x702.jpg", "https://bigdata-vn.com/wp-content/uploads/2021/10/Hinh-anh-goc-lam-viec-dep-doc-dao-va-day.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index = 0;
    }  
}   
setInterval(changeImage,5000); 
let menu = document.getElementById('menu')
Menu = () =>{
    menu.classList.remove('disappears')
}
Close = () =>{
    menu.classList.add('disappears')
}