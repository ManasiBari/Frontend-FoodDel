function updateOutput() {
  var html = document.getElementById("htmlCode").value;
  var css = "<style>" + document.getElementById("cssCode").value + "</style>";
  var js = "<script>" + document.getElementById("jsCode").value + " </script>";
  var output = document.getElementById("output").contentWindow.document;

  output.open();
  output.write(html + css + js);
  output.close();
}

// Update output when any code is changed
document.getElementById("htmlCode").addEventListener("input", updateOutput);
document.getElementById("cssCode").addEventListener("input", updateOutput);
document.getElementById("jsCode").addEventListener("input", updateOutput);

// Initial update
updateOutput();







