//<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Allumer lampe</button>

//<img id="myImage" src="pic_bulboff.gif" style="width:100px">

//<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Eteindre la lampe</button>
onload = init
var light = true
function init(){
    document.getElementById("photo").onclick= jourNuit
    document.getElementById("Button1").onclick= jourNuit
    jourNuit()
}
function jour(){
    document.getElementById("photo").src="pic_bulbon.gif"
    document.getElementById("Button1").value="Eteindre la lampe"
    document.body.style.backgroundColor= "yellow"
    
}
function Nuit(){
    document.getElementById("photo").src="pic_bulboff.gif"
    document.getElementById("Button1").value="Allumer la lampe"
    document.body.style.backgroundColor= "black"
}
function jourNuit(){
      if (light == true) {jour()
        light = false
    }
      else {Nuit()

        light = true
        }

        
       
}
