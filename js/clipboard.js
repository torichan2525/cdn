new ClipboardJS('.copy-btn');

const clipboard = new ClipboardJS('.copy-btn');
 
// Select all .copy-value items
const btns = document.querySelectorAll('.copy-btn');
 
// Remove .tooptip class by mouseout
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('mouseleave',clearTooltip);
}
function clearTooltip(e){
    e.currentTarget.setAttribute('class','copy-btn');
}
 
// Add .tooltip class when it's clicked
function showTooltip(elem){
    elem.setAttribute('class','copy-btn tooltip');
}
 
clipboard.on('success', function(e) {
    showTooltip(e.trigger);
});
