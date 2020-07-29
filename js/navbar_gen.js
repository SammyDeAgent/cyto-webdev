//Loading jQuery to File
var script = document.createElement('script');
script.src = 'jquery-3.5.1.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//Code goes here
$(document).ready(
    $(function(event){
        $("#navbar").html(
            <div>
            <a style="padding-left:10px"><img src ="img/Cytokine_Logo_White.png" style="max-width: 25px;"/></a>
            <a class="active" href="https://uccd2223-cytokine.azurewebsites.net/">Main</a>
            <div class="dropdown">
                <div onclick="location.href='https://uccd2223-cytokine.azurewebsites.net/labportal.html'" 
                class="dropbtn" style="cursor: pointer;">Labs 
                    <i style="font-size: 14px; margin:0px; padding:0px; padding-bottom: 10px;"
                    class="fa fa-caret-down"></i>
                </div>
                <div class="dropdown-content">
                    <a href="https://uccd2223-cytokine.azurewebsites.net/labs/myfirstpage.html">Lab 1</a>
                    <a href="https://uccd2223-cytokine.azurewebsites.net/labs/lab2.html">Lab 2</a>
                    <a href="https://uccd2223-cytokine.azurewebsites.net/labs/lab3.html">Lab 3</a>
                    <a href="https://uccd2223-cytokine.azurewebsites.net/labs/lab4.html">Lab 4</a>
                    <a href="https://uccd2223-cytokine.azurewebsites.net/labs/lab5.html">Lab 5</a>
                </div>
            </div> 
            <a href="https://uccd2223-cytokine.azurewebsites.net/7355608.html">Music</a>
            <a href="https://uccd2223-cytokine.azurewebsites.net/about.html">About</a>
            <a class="leftflex" href="https://cytokine.pepperkick.com/" 
            style="float:right; padding-right: 0px;">Cytokine Corporations
                <i style="font-size: 14px; margin:0px; padding:0px; width: 35px;" 
                class="fa fa-external-link"></i>
            </a>
            </div>
        )
    })
)


    
