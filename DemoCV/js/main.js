// alert('hello')
$(document).ready(function () {
    $(".slidesWrapper").isotope({
    // options
    itemSelector: "img",
    layoutMode: "fitRows",
});
    const wimg = $("img").width();
    $(".slidesWrapper").forEach((val) => {
      val.css("height", `${wing}px`)
});
    item
})
$(".controls").on("click", "button",function(){
    const filter = $(this).data("filter")
    $(".slidesWrapper").isotope({ filter })
    $("button").removeClass()
    $(this).addClass("active-btn")
})

