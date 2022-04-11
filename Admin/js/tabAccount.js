const navList = document.querySelectorAll('.nav-item');
const contentList = document.querySelectorAll('.content')

navList.forEach(function(nav, index) {
    const content = contentList[index];

    nav.onclick = function() {
        var navActive = document.querySelector('.nav-item.active');
        var contentActive = document.querySelector('.content.active');

        if(navActive) {
            navActive.classList.remove('active');
        }

        if(contentActive) {
        contentActive.classList.remove('active');
        }
        
        nav.classList.add('active');
        content.classList.add('active');
    }
})

function openCity(evt, User) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(User).style.display = "block";
    evt.currentTarget.className += " active";
}