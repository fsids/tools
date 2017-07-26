function redirect() {
    var textValue = document.getElementById("pocket").value;
    window.open("https://getpocket.com/a/queue/grid/" + textValue;

}
                
function openTab(url) {
   var url = "https://getpocket.com/a/queue/grid/" + url;
   var win = window.open(url, '_blank');
   win.focus();
}
