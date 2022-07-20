function edit_about() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("description");
    element.innerHTML = updated;
  }
}

function edit_py() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("py");
    element.innerHTML = updated;
  }
}

function edit_c() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("c++");
    element.innerHTML = updated;
  }
}


function edit_html() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("html");
    element.innerHTML = updated;
  }
}


function edit_css() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("css");
    element.innerHTML = updated;
  }
}

function edit_b_s() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("b_s");
    element.innerHTML = updated;
  }
}

function edit_j_s() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("j_s");
    element.innerHTML = updated;
  }
}

function edit_p1() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("p1");
    element.innerHTML = updated;
  }
}

function edit_p2() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("p2");
    element.innerHTML = updated;
  }
}


function edit_p3() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("p3");
    element.innerHTML = updated;
  }
}

function edit_p4() {
  var updated = prompt("What do you want to say....");
  if(updated == "" || updated==" "){
    return;
  }
  else if (updated == null) {
    return;
  }
  else {
    var element = document.getElementById("p4");
    element.innerHTML = updated;
  }
}



function allow_edit() {
  var a = document.getElementById("edit_about");
  var b = document.getElementById("edit_py");
  var c = document.getElementById("edit_c");
  var d = document.getElementById("edit_html");
  var e = document.getElementById("edit_css");
  var f = document.getElementById("edit_b_s");
  var g = document.getElementById("edit_j_s");
  var p1 = document.getElementById("edit_p1");
  var p2 = document.getElementById("edit_p2");
  var p3 = document.getElementById("edit_p3");
  var p4 = document.getElementById("edit_p4");
  if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" &&
  d.style.display == "none" && e.style.display == "none" && f.style.display == "none" && g.style.display == "none"
  && p1.style.display == "none" && p2.style.display == "none" && p3.style.display == "none" &&
  p4.style.display == "none")
  {
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    f.style.display = "block";
    g.style.display = "block";
    p1.style.display = "block";
    p2.style.display = "block";
    p3.style.display = "block";
    p4.style.display = "block";
  } 
  else {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
  }
}
