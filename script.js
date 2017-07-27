           
function openTab2(url) {
   var url = "https://getpocket.com/a/queue/grid/" + url;
   var win = window.open(url, '_blank');
   win.focus();
}

$("#pocketForm").submit(function( event ) {
  event.preventDefault();
   var url = "https://getpocket.com/a/queue/grid/" + $('#pocket').val();;
   var win = window.open(url, '_blank');
   win.focus();
});
