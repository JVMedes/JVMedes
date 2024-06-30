var home_link = "../index.html", 
    directory_link = "directory.html",
    about_link = "about.html";

if (typeof window.on_index !== 'undefined')
{
    document.getElementsByClassName("about_btn")[0].href = "html/about.html";
    document.getElementsByClassName("directory_btn")[0].href = "html/directory.html";
}
else
{
    document.getElementsByClassName("home_btn")[0].href = home_link;

    var aboutBtn = document.getElementsByClassName("about_btn"),
        directoryBtn = document.getElementsByClassName("directory_btn");

    if (aboutBtn.length > 0)
    {
        aboutBtn[0].href = about_link;
    }

    if (directoryBtn.length > 0)
    {
        directoryBtn[0].href = directory_link;
    } 
    
}

