// alert('hello')
$(document).ready(function () {
    $(".slideImgs").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
});
    const wimg = $("img").width();
    $(".slideImgs").forEach((val) => {
      val.css("height", `${wing}px`)
});
    slideImgs
})
$(".controls").on("click", "button",function(){
    const filter = $(this).data("filter")
    $(".slideImgs").isotope({ filter })
    $("button").removeClass()
    $(this).addClass("active-btn")
})

