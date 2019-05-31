function play()
{
var a = Math.random()*5;
a=Math.floor(a);

if(a==0)
{
document.getElementById('soundtrack').innerHTML="<audio id='myaudio' loop autoplay><source src='http://astronauten.tk/changelog/media/paradise.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
}
if(a==1)
{
document.getElementById('soundtrack').innerHTML="<audio id='myaudio' loop autoplay><source src='http://astronauten.tk/changelog/media/mounika.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
}
if(a==2)
{
document.getElementById('soundtrack').innerHTML="<audio id='myaudio' loop autoplay><source src='http://astronauten.tk/changelog/media/tonight.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
}
if(a==3)
{
document.getElementById('soundtrack').innerHTML="<audio id='myaudio' loop autoplay><source src='http://astronauten.tk/changelog/media/star.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
}
if(a==4)
{
document.getElementById('soundtrack').innerHTML="<audio id='myaudio' loop autoplay><source src='http://astronauten.tk/changelog/media/awful.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
}
  var audio = document.getElementById("myaudio");
  audio.volume = 0.04;
}