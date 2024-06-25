document.querySelector(".output").style.visibility = "hidden";
document.querySelector("#unitinput").addEventListener("input", function(e) {
    document.querySelector(".output").style.visibility = "visible"
    const unit = e.target.value;
    document.querySelector("#mmoutput").innerHTML= unit*1000;
    document.querySelector("#cmoutput").innerHTML= unit*100;
    document.querySelector("#inoutput").innerHTML= unit*39.37;
    document.querySelector("#kmoutput").innerHTML= unit/1000;

})