function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KR1IHvemPm":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

