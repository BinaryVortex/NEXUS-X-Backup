document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const menuList = document.getElementById("menu-list");
    const menuItems = menuList.getElementsByTagName("li");

    // Store text values in an array for better performance
    const menuTexts = Array.from(menuItems).map(item => 
        (item.getElementsByTagName("a")[0].textContent || item.getElementsByTagName("a")[0].innerText).toLowerCase()
    );

    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < menuItems.length; i++) {
            if (menuTexts[i].indexOf(filter) > -1) {
                menuItems[i].style.display = "";
            } else {
                menuItems[i].style.display = "none";
            }
        }
    });
});
