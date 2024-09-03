const navnInp = document.querySelector("#navnFelt");
const trykkBtn = document.querySelector("#trykkKnapp");
const utskriftEl = document.querySelector("#utskrift");

trykkBtn.onclick = () => {
    let navn = navnInp.value;
    navnInp.value = "";

    //utskriftEl.innerHTML += "Velkommen " + navn + "!<br>";
    utskriftEl.innerHTML += `Velkommen ${navn}!<br>`;
}

