
const menuHandler = () => {
    let titulo = document.getElementById("titulo");
    let greeting = document.getElementById("greeting");
    if (titulo.innerText=='FINTECH') {
        titulo.innerText = '';
        if (greeting) {
            greeting.style.display = 'none';
        }
    } else {
        setTimeout(() => {
            titulo.innerText = 'FINTECH';
            if (greeting) {
                greeting.style.display = 'block';
            }
        }, 350);
    }
}

