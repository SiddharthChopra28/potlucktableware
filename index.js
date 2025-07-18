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
    
    document.getElementById('submit').disabled = true;

    let json = {
        name,
        email,
        number,
        query
    }
    if (name.trim() === "" || email.trim() === "" || number.trim() === "" || query.trim() === ""){
        document.getElementById('success').classList.add('hidden');
        document.getElementById('failure').classList.add('hidden');
        document.getElementById('incomplete').classList.remove('hidden');
        document.getElementById("submit").onclick = submit;
        return;
    }
    
    await fetch("/submit",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        }
    ).then((response)=>{
        if (response.ok){
            document.getElementById('success').classList.remove('hidden');
            document.getElementById('failure').classList.add('hidden');
            document.getElementById('incomplete').classList.add('hidden');
        }
        else{
            document.getElementById('failure').classList.remove('hidden');
            document.getElementById('success').classList.add('hidden');
            document.getElementById('incomplete').classList.add('hidden');

        }
        document.getElementById("submit").onclick = submit;
    })

    




}


