function hoursToMinut() {
  var x = document.getElementById("radio1").value;
  var z = document.getElementById("radio2").value;

  var y = document.getElementById("jio").value;

  if (x == "1") {
    var hours = parseInt(y);
    var minutes = hours * 60;
    document.getElementById("output").innerHTML = minutes;
  }
  if (z == "2") {
    var h = parseInt(y);
    var second = h * 60 * 60;

    document.getElementById("output").innerHTML = second;
  }
}
