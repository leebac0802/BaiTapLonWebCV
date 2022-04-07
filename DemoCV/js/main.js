//show imgs, hover
let hover=document.querySelectorAll('.hover')
let eye=document.querySelectorAll('.fa-eye')
let overlay=document.querySelectorAll('.overlay')
for(let i=0; i<eye.length;i++){
    eye[i].addEventListener('click', function(){
        overlay[i].style.transform= 'scale(1)'
        hover[i].style.transform='scale(0)'
    })
}


for(let i=0; i<overlay.length;i++){
    overlay[i].addEventListener('click', function(){
        overlay[i].style.transform= 'scale(0)'
        hover[i].style.transform='scale(5)'
    })
}



//phan nay

const filterBtns = document.querySelectorAll(".filter-btn button");
const imgs = document.querySelectorAll(".imgs");
//duyệt qua từng nút
filterBtns.forEach((btn) => {
    
    
    btn.onclick = () => {
        //lấy dữ liệu(điều kiện lọc) trong filter thông qua nút dc nhấn
        const filterCondition = btn.dataset.filter;
        
        //thêm class active cho nút được nhấn

        //dùng vòng for thay cho foreach bên dưới
        // for(var i = 0; i < filterBtns.length; i++) {
        //     filterBtns[i].classList.remove('active-btn');
        // }
        filterBtns.forEach((btn)=> {
            btn.classList.remove('active-btn');
        })
        btn.classList.add('active-btn');

        // duyệt qua các ảnh, ảnh nào có cùng filter cho hiển thị phần tử cha, còn k thì ẩn đi
        //dùng vòng for thay thế foreach bên dưới
        // for(var i = 0; i < imgs.length; i++) {
        //     if (imgs[i].classList.contains(filterCondition)) {
        //         //parentElement là thẻ cha (slideImgs)
        //         imgs[i].parentElement.style.display = "block";
        //     } else {
        //         imgs[i].parentElement.style.display = "none";
        //     }
        // }

        imgs.forEach((img) => {
            
            if (img.classList.contains(filterCondition)) {
                img.parentElement.style.display = "block";
            } else {
                img.parentElement.style.display = "none";
            }
        });
    };
});