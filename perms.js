function checkAutoplay(element){
    var p = navigator.getAutoplayPolicy(element);
    if(p === "allowed-muted" || p === "disallowed") {
        requestAutoplay();
    } 
}
async function requestAutoplay() {
    var d = document.createElement('div');
    d.id = 'block';
    document.getElementsByTagName('body')[0].appendChild(d);
    var n = document.createElement('p' );
    n.innerHTML = "Give permissions for audio pwease? TwT";
    d.appendChild(n);
}
function autoRun(){
    checkAutoplay(document.getElementById("bg"));
}