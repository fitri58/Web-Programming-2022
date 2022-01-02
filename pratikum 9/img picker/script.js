// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("img").innerHTML="<img src='img/tupai.jpg'>";
           window.alert("Ini Adalah Gambar TUPAI.jpg");
       }
       else if (pil=="2")
       {
           document.getElementById("img").innerHTML="<img src='img/rusa1.jpg'>";
           window.alert("Ini Adalah Gambar RUSA.jpg");
       }
       else if (pil=="3")
       {
           document.getElementById("img").innerHTML="<img src='img/kudanil.jpg'>";
           window.alert("Ini Adalah Gambar KUDANIL.jpg");
       }
       else if (pil=="4")
       {
           document.getElementById("img").innerHTML="<img src='img/zebra.jpg'>";
           window.alert("Ini Adalah Gambar ZEBRA.jpg");
       }
       else if (pil=="5")
       {
           document.getElementById("img").innerHTML="<img src='Img/koala1.jpg'>";
           window.alert("Ini Adalah Gambar KOALA.jpg");
       }
       else if (pil=="6")
       {
           document.getElementById("img").innerHTML="<img src='Img/gorila.jpg'>";
           window.alert("Ini Adalah Gambar GORILA.jpg");
       }
       else if (pil=="7")
       {
           document.getElementById("img").innerHTML="<img src='Img/buaya.jpg'>";
           window.alert("Ini Adalah Gambar BUAYA.jpg");
       }
       else if (pil=="8")
       {
           document.getElementById("img").innerHTML="<img src='Img/Kangguru1.jpg'>";
           window.alert("Ini Adalah Gambar KANGGURU.jpg");
       }else{
           document.getElementById("img").innerHTML="<img src='Img/search.png'>";
       }
       
   }