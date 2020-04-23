var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var summary = this.nextElementSibling;
    if (summary.style.display === "block") {
      summary.style.display = "none";
    } else {
      summary.style.display = "block";
    }
  });
}