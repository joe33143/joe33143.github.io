function Mode1(net, Mode) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("square");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Mode).style.display = "block";
    net.currentTarget.className += " active";
}
function Mode2(net, Mode2) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("RGB-Tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Mode2).style.display = "block";
    net.currentTarget.className += " active";
}

    
function RED_B(val){
        document.getElementById('REDPos_B').innerHTML = val;
        R1 = val;
        $.ajaxSetup({timeout:50});
        $.get('/?RED1=' + val + '&');
        Connection: close;
        //console.log(BR)
         }
function GREEN_B(val){
        document.getElementById('GREENPos_B').innerHTML = val;
        G1 = val;
        $.ajaxSetup({timeout:50});
        $.get('/?GREEN1=' + val + '&');
        Connection: close;
        //console.log(val)
         }            
function BLUE_B(val){
        document.getElementById('BLUEPos_B').innerHTML = val;
        B1 = val;
        $.ajaxSetup({timeout:50});
        $.get('/?BLUE1=' + val + '&');
        Connection: close;    
        //console.log(val)
        }
function RED_F(val){
        document.getElementById('REDPos_F').innerHTML = val;
        R2 = val;
        $.ajaxSetup({timeout:50});
        $.get('/?RED2=' + val + '&');
        Connection: close;
        //console.log(val)
         }            
function GREEN_F(val){
        document.getElementById('GREENPos_F').innerHTML = val;
        G2 = val;
        $.ajaxSetup({timeout:50});
        $.get('/?GREEN2=' + val + '&');
        Connection: close;
        //console.log(val)
         }            
function BLUE_F(val){
        document.getElementById('BLUEPos_F').innerHTML = val;
        B2 = val;
        $.ajaxSetup({timeout:50});
        $.get('/?BLUE2=' + val + '&');
        Connection: close;    
        //console.log(val)
        }
function Save(){       
        $.ajaxSetup({timeout:50});
        $.get('/?Save=' + "SAVE" + '&');
        Connection: close;    
        //console.log(val)
        }

function change(){    
    var id = "linear-gradient(to right,RGBA(" + R1 + "," + G1 + "," + B1 + ",255), RGBA(" + R2 + "," + G2 + "," + B2 + ",255))";
   document.getElementById("demo").style.backgroundImage = id;
//console.log(id);//
    }

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(xmlhttp.responseText);
                var col = JSON.parse(xmlhttp.responseText);
                    REDLed.value = (col.red1);
                    document.getElementById('REDPos_B').innerHTML = (col.red1);
                    R1 = (col.red1);
                    GREENLed.value = (col.green1);
                    document.getElementById('GREENPos_B').innerHTML = (col.green1);
                    G1 = (col.green1)
                    BLUELed.value = (col.blue1);
                    document.getElementById('BLUEPos_B').innerHTML = (col.blue1);
                    B1 = (col.blue1);
                
                
                    REDLed_F.value = (col.red2);
                    document.getElementById('REDPos_F').innerHTML = (col.red2);
                    R2 = (col.red2);
                    GREENLed_F.value = (col.green2);
                    document.getElementById('GREENPos_F').innerHTML = (col.green2);
                    G2 = (col.green2);
                    BLUELed_F.value = (col.blue2);
                    document.getElementById('BLUEPos_F').innerHTML = (col.blue2);
                    B2 = (col.blue2);
                
                    var id = "linear-gradient(to right,RGBA(" + R1 + "," + G1 + "," + B1 + ",255), RGBA(" + R2 + "," + G2 + "," + B2 + ",255))";
                    document.getElementById("demo").style.backgroundImage = id;
                
                    console.log (col.Mode);
                    var Mode = (col.Mode);
                    document.getElementById(Mode).checked = "checked";
                    
                    if (Mode=="FADED"){
                    FADE()                  
                    }
                } 
        };
        xmlhttp.open("GET", "Index.json", true);
        xmlhttp.send();

function DRL(){       
        $.ajaxSetup({timeout:50});
        $.get('/?DRL=' + "DRL" + '&');
        Connection: close;    
        //console.log(val)
        }

function BREATHING(){       
        $.ajaxSetup({timeout:50});
        $.get('/?BREATHING=' + "BREATHING" + '&');
        Connection: close;    
        //console.log(val)
        }

function RIDER(){       
        $.ajaxSetup({timeout:50});
        $.get('/?RIDER=' + "RIDER" + '&');
        Connection: close;    
        //console.log(val)
        }

function POLICE(){       
        $.ajaxSetup({timeout:50});
        $.get('/?POLICE=' + "POLICE" + '&');
        Connection: close;    
        //console.log(val)
        }

function FADE(){
    document.getElementById("HEAD2").className = "tablinks active";
    document.getElementById("HEAD1").className = "tablinks";
    document.getElementById("FADED").checked = "checked";
    
    document.getElementById("MODE").style = "display: none";
    document.getElementById("FADE").style = "display: block";
    
    $.ajaxSetup({timeout:50});
    $.get('/?FADE=' + "FADE" + '&');
    Connection: close;    
    //console.log(val)
}

function SAVE(){       
        $.ajaxSetup({timeout:50});
        $.get('/?Save=' + "SAVE" + '&');
        Connection: close;    
        //console.log(val)
        }