// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload =  function() 
{
  
    var fruitElements = document.querySelector("#fruit");
    var flist = "<ol> "
    for (var i = 0; i < fruits.length; i++){
        flist += "<li>" +fruits[i] +"</li>";
        if (i == fruits.length){
            list += "</ol>";    
        }
    }
    fruitElements.innerHTML = flist;   

     var dirElements = document.querySelector("#list");
     dir = "<ul>"
     for (i = 0; i < directory.length; i++)
     {
         if(directory[i].type == "file"){
             dir += "<li>" +directory[i].name +"</li>"
         }
         else if (directory[i].type == "directory")
          {
             dir += directory[i].name + "<ul>";            
                for(var j = 0; j < directory[i].files.length; j++)
                {                
                 dir += "<li>" + directory[i].files[j].name + "</li>";            
             }
             dir += "</ul>";
         }

     }
     dir += "</ul>";
     dirElements.innerHTML = dir;
}