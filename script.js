let toggleNavStatus = false;
let toggleNav=function()
{
    let con=document.querySelector(".main");
    let getSidebar=document.querySelector(".nav-sidebar");
    let getSidebarList = document.querySelector(".nav-sidebar ul")
    let getsidebarTitle=document.querySelector(".nav-sidebar span")
    let getsidebarlnks=document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus==false)
    {
        con.style.left="200px";
        con.style.width="calc(100% - 200px)";
        getSidebarList.style.visibility="visible";
        getSidebar.style.width = "190px";
        getsidebarTitle.style.opacity="1";
        getsidebarTitle.style.width="190px";
        let arraylength=getsidebarlnks.length;
        for(let i=0;i<arraylength;i++)
        {
            getsidebarlnks[i].style.opacity="1";
        }
        toggleNavStatus=true;
    }
    else
    {
        con.style.left="60px";
        con.style.width="calc(100% - 60px)";
        getSidebar.style.width="50px";
        getsidebarTitle.style.opacity="0";
        getsidebarTitle.style.width="50px";
        let arraylength=getsidebarlnks.length;
        for(let i=0;i<arraylength;i++)
        {
            getsidebarlnks[i].style.opacity="0";
        }
        getSidebarList.style.visibility="hidden";
        toggleNavStatus=false;
    }
}
let changeTitle=function(number)
{
    let title=document.getElementById("titlebar");
    var x=document.getElementById(number).innerHTML;
    title.innerHTML=x;
}
