function showContent(component) {
  var content = document.getElementById("content");
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      content.innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };

  xhttp.open("GET", component + ".html", true);
  xhttp.send();
}
