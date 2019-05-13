

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

    window.onload = function ()
     {
        var container = document.querySelector("#audioContainer");
        var list = "<figure>";
    
        if (audio.controls) {
            list += "<audio controls>";
        } 
    
        for (var i = 0; i < audio.source.length; i++) {
            list += '<source src="' + audio.source[i].src + '" type="' + audio.source[i].type + '" />';
        }
        list += "</audio>";
        list += "</figure>";
        audioContainer.innerHTML = list;
    
};