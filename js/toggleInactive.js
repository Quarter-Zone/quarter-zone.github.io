document.addEventListener("DOMContentLoaded", function() {
    inactiveToggle = document.querySelector("#inactive-toggle")
    if (inactiveToggle.checked) {
        document.querySelectorAll("tr.inactive-disabled").forEach(function(item, index) {
            item.classList.remove("inactive-disabled");
            item.classList.add("inactive");
        });
    }

    inactiveToggle.addEventListener("change", function() {
        if (this.checked) {
            document.querySelectorAll("tr.inactive-disabled").forEach(function(item, index) {
                item.classList.remove("inactive-disabled");
                item.classList.add("inactive");
            });
        }
        else {
            document.querySelectorAll("tr.inactive").forEach(function(item, index) {
                item.classList.add("inactive-disabled");
                item.classList.remove("inactive");
            });
        }
    })
});
