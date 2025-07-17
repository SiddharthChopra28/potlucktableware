function scrollto(elemid) {
    document.getElementById(elemid).scrollIntoView({ behavior: "smooth" });
}

function toggleNavbar(curr) {
    if (curr == 'menu') {
        document.getElementById('threelines').style.display = 'none';
        document.getElementById('cross').style.display = 'block';
        document.getElementById('mobilenavmenu').style.display = 'flex';
    }
    else if (curr == 'close') {
        document.getElementById('threelines').style.display = 'block';
        document.getElementById('cross').style.display = 'none';
        document.getElementById('mobilenavmenu').style.display = 'none';
    }
}






