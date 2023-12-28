function changeColor() {
    let red=Math.floor(Math.random()*256);
    let color="rgb("+red+")";
    document.getElementById("colorFlipper").style.backgroundColor=color;

}