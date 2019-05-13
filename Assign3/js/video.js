// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};
window.onload = function() 
{
    var container = document.querySelector("#videoContainer");
    var list = "<figure>";

    if (video.controls)
    {
        list += '<video width="' + video.width + '" height="' + video.height + '" controls>';
    } else {
        list += '<video width="' + video.width + '" height="' + video.height + '" >';
    }

    for (var i = 0; i < video.source.length; i++) {
        list += '<source src="' + video.source[i].src + '" type="' + video.source[i].type + '" />';
    }

    list += "</video>";
    list += "</figure>";
    container.innerHTML = list;
   
};