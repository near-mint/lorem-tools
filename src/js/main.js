function bindReport() {

  document.addEventListener("mousedown", reportOnSelection);
  document.addEventListener("mouseup", reportOnSelection);
  document.addEventListener("onkeyup", reportOnSelection);
  document.addEventListener("onkeydown", reportOnSelection);
  document.addEventListener("onkeydown", reportOnSelection);
  document.onselectionchange = function() { reportOnSelection();};

}

function reportOnSelection() {
  var cout,reports,report;
  count = window.getSelection().toString().length
  //console.log(c);
  reports = document.getElementsByClassName('charCountReport');
  for (var i = 0; i < reports.length; i++) {
    report = reports[i];

    // update the count in the report
    for (var i = 0; i < report.childNodes.length; i++) {
        if (report.childNodes[i].className == "charCount") {
          report.childNodes[i].innerText = count;
        }
    }

    // add zeroChars class if nothing selected to updates styles to be warning-esque, e.g., red.
    if (count > 0) {
      report.classList.remove("zeroChars");
    }
    else {
      report.classList.add("zeroChars");
    }
  }
}

function stopTest() {
  clearInterval(test);
}

bindReport();
