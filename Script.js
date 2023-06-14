function toggleDiv(divId) {
    const div = document.getElementById(divId);
    try {
        if (div === null) {
            throw new Error("Div not found!");
        } 
        else {
            div.style.display = div.style.display === 'flex' ? 'none' : 'flex';
        } 
    }
    catch (Error) {
        alert(Error);
    }
}

function untogDiv(divId) {
    const div = document.getElementById(divId);
    try {
        if (div === null) {
            throw new Error("Div not found!");
        } 
        else {
            div.style.display = div.style.display === 'none' ? 'flex' : 'none';
        } 
    }
    catch (Error) {
        alert(Error);
    }
}

function aboutUs(member) { 
    untogDiv('start');
    toggleDiv('about');
   
    const AboutUs = document.getElementById("AboutUs");

    AboutUs.innerHTML =
          '<p>We are a game development team, that always tries to make great games. <p>Pair Studios is currently new on the gaming market, which is why it dont have many members yet.</p>  <p>We have ' +
          member +
          ' member(s) currently.</p> <p>Find our games at <a href="https://store.steampowered.com">Steam</a> or <a href="https://scratch.mit.edu/users/StaminaDev/">Scratch</a>' + 
          ' or join us by asking on Scratch/Steam/Forums.' + ' We appreciate your support!</p>';
}

function start() {    
    untogDiv('about');
    toggleDiv('start');
}

function toggleMenu() {
    const menuBtns = document.getElementById('HamMenu');

    menuBtns.classList.toggle('open');
}