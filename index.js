function play_music() {
  document.getElementById("player").play();
}

function stop_music() {
  document.getElementById("player").pause();
}

function open_form() {
  document.querySelector(".modal").style.display = "flex";

  get_info();
}
// Close the Form
function close_form() {
  document.querySelector(".modal").style.display = "none"
};


function get_info(){
  //Get About info
  var about_textarea = document.getElementById("about1");
  var about_value = document.getElementById("description").innerHTML;
  about_textarea.value = about_value;

  //Get Skills info
  var py_textarea = document.getElementById("py1");
  var py_python = document.getElementById("py").innerHTML;
  py_textarea.value = py_python;


  var c_textarea = document.getElementById("c1");
  var c_value = document.getElementById("c++").innerHTML;
  c_textarea.value = c_value;


  var html_textarea = document.getElementById("html1");
  var html_value = document.getElementById("html").innerHTML;
  html_textarea.value = html_value;


  var css_textarea = document.getElementById("css1");
  var css_value = document.getElementById("css").innerHTML;
  css_textarea.value = css_value;


  //Get Projects info
  var p1_textarea = document.getElementById("skills1");
  var p1_value = document.getElementById("p1").innerHTML;
  p1_textarea.value = p1_value;


  var p2_textarea = document.getElementById("skills2");
  var p2_value = document.getElementById("p2").innerHTML;
  p2_textarea.value = p2_value;



  var p3_textarea = document.getElementById("skills3");
  var p3_value = document.getElementById("p3").innerHTML;
  p3_textarea.value = p3_value;


  var p4_textarea = document.getElementById("skills4");
  var p4_value = document.getElementById("p4").innerHTML;
  p4_textarea.value = p4_value;

}


function update() {
  var text_value = document.getElementById("about1").value;
  var py_textarea = document.getElementById("py1").value;
  var c_textarea = document.getElementById("c1").value;
  var html_textarea = document.getElementById("html1").value;
  var css_textarea = document.getElementById("css1").value;
  var p1_textarea = document.getElementById("skills1").value;
  var p2_textarea = document.getElementById("skills2").value;
  var p3_textarea = document.getElementById("skills3").value;
  var p4_textarea = document.getElementById("skills4").value;

  if(text_value == "" || text_value ==" " || text_value == null ||
     py_textarea == "" || py_textarea ==" " || py_textarea == null ||
     c_textarea == "" || c_textarea ==" " || c_textarea == null ||
     html_textarea == "" || html_textarea ==" " || html_textarea == null ||
     css_textarea == "" || css_textarea ==" " || css_textarea == null ||
     p1_textarea == "" || p1_textarea ==" " || p1_textarea == null ||
     p2_textarea == "" || p2_textarea ==" " || p2_textarea == null ||
     p3_textarea == "" || p3_textarea ==" " || p3_textarea == null ||
     p4_textarea == "" || p4_textarea ==" " || p4_textarea == null) {

    alert("Updated Failed, You Can't Leave Section Empty!!, Try again");
    document.querySelector(".modal").style.display = "none";
  }

  else {
    var element1 = document.getElementById("description");
    element1.innerHTML = text_value;

    var element2 = document.getElementById("py");
    element2.innerHTML = py_textarea;

    var element3 = document.getElementById("c++");
    element3.innerHTML = c_textarea;

    var element4 = document.getElementById("html");
    element4.innerHTML = html_textarea;

    var element5 = document.getElementById("css");
    element5.innerHTML = css_textarea;

    var element6 = document.getElementById("p1");
    element6.innerHTML = p1_textarea;

    var element7 = document.getElementById("p2");
    element7.innerHTML = p2_textarea;

    var element8 = document.getElementById("p3");
    element8.innerHTML = p3_textarea;

    var element9 = document.getElementById("p4");
    element9.innerHTML = p4_textarea;

    alert("Updated Successfully😊");
    document.querySelector(".modal").style.display = "none";
  }
}
