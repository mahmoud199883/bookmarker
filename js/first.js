




var bookmarkname=document.getElementById("bookmarkname");
var websiteurl =document.getElementById("websiteurl");
var mybtn=document.getElementById("mybtn");
var sites;

if(localStorage.getItem("mydata")==null)
{
    sites=[];
}
else
{
    sites=JSON.parse(localStorage.getItem("mydata"));
    displaysites();
}

mybtn.onclick=function()
{
    if(bookmarkname.value=="" || websiteurl.value=="")
    {
     window.alert("please enter data in fields !")
    }
    else{
        addsite();
    }
     
}

function addsite()
{
    var siteinfo=
    {
       sitename:bookmarkname.value,
        siteurl:websiteurl.value,
    }
    sites.push(siteinfo);
    localStorage.setItem("mydata",JSON.stringify(sites));
    displaysites();
    clear()
    console.log(sites);

}


function displaysites()
{
    siterow="";
    for(var i=0;i<sites.length;i++)
    {
        siterow += `<div class="row bg-display pl-5  py-5   my-5 align-items-center"><h2 class="myhead mr-5">`+sites[i].sitename+`</h2>
        <a class="btn btn-primary px-5 mr-5" href=`+sites[i].siteurl+` target="_blank">Visit</a>
        <button class="btn btn-danger px-5  ml-1 deletebtn" onclick="deletesite(`+i+`)">Delete</button>
        </div>`
    }
    document.getElementById("mybody").innerHTML=siterow;
}

function deletesite(index)
{
   sites.splice(index,1);
   localStorage.setItem("mydata",JSON.stringify(sites));
   displaysites();
}

function clear()
{
    bookmarkname.value="";
    websiteurl.value="";

}