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

async function submit() {
    let name = document.getElementById("nameinput").value;
    let email = document.getElementById("emailinput").value;
    let number = document.getElementById("numberinput").value;
    let query = document.getElementById("querybox").value;

    let json = {
        name,
        email,
        number,
        query
    }

    await fetch("https://formsubmit.co/d492f735d27c8b2a8615557a99acca42",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        }
    )
}


