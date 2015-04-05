var g_scroll_id
function scroll_right(max,pos,id){
  if(g_scroll_id){ return false }
  id = id || "right_area"
  var doc = document.getElementById(id)
  var target = doc.scrollHeight / max * (pos - 1)
  if (doc.scrollTop != target){
    doc.scrollTop = target
  }
}