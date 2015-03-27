function set_change_pic(flag){
  flag = flag || "change"
  var img_list = document.images
  var src = ""
  for (var i = 0; i < img_list.length; i++){
    if ( img_list[i].getAttribute(flag) ){
      src = img_list[i].src
      img_list[i].setAttribute(flag + "_old", src)
      img_list[i].setAttribute(flag, src.substr(0, src.length-4) + "_c" + src.substr(src.length-4))
      img_list[i].onmouseover = function(){ this.src = eval('this.getAttribute("'+flag+'")') }
      img_list[i].onmouseout = function(){ this.src = eval('this.getAttribute("' + flag + '_old")') }
    }
  }
}
function loadding(){
  add_frame('main_area')
  $('#foot').load("foot.html")
  $('#head').load("head.html",function(responseTxt,statusTxt,xhr){
    set_change_pic()
    load_over()
  })
}

function load_over(){
  $('#loadding').hide()
  $('#load_over').show()
}
// 加载页眉页首 ↑

function add_frame(id){
  var doc = document.getElementById(id)
  var string = '<table border="0" cellpadding="0" cellspacing="0"><tr>'
  string += '<td style="background-image:url('+"'img/frame7.png');width:33px;height:33px"+'"></td>'
  string += '<td style="background-image:url('+"'img/frame8.png');height:33px"+'"></td>'
  string += '<td style="background-image:url('+"'img/frame9.png');width:33px;height:33px"+'"></td></tr>'
  string += '<tr><td style="background-image:url('+"'img/frame4.png');width:33px"+'"></td><td>'
  string += '<div id="main">' + doc.innerHTML + '</div>'
  string += '</td><td style="background-image:url(' + "'img/frame6.png');width:33px" + '"></td></tr>'
  string += '<tr><td style="background-image:url(' + "'img/frame1.png');width:33px;height:33px" + '"></td>'
  string += '<td style="background-image:url(' + "'img/frame2.png');height:33px" + '"></td>'
  string += '<td style="background-image:url(' + "'img/frame3.png');width:33px;height:33px" + '"></td></tr></table>'
  doc.innerHTML = string
}


var g_scroll_id
function scroll_right(max,pos,id,speed){
  if(g_scroll_id){ return false }
  id = id || "right_area"
  var doc = document.getElementById(id)
  var target = doc.scrollHeight / max * (pos - 1)
  if (doc.scrollTop != target){
    speed = speed || 20
    speed = Math.abs(doc.scrollTop - target) / speed
    g_scroll_id = setInterval(function(){scroll_right_process(doc,speed,target)}, 1)
  }
}

function scroll_right_process(doc,speed,target){
  if (doc.scrollTop > target){
    doc.scrollTop -= speed
    if (doc.scrollTop < target){ doc.scrollTop = target }
  }
  if (doc.scrollTop < target){
    doc.scrollTop += speed
    if (doc.scrollTop > target){ doc.scrollTop = target }
  }
  if (doc.scrollTop == target){
    g_scroll_id = self.clearInterval(g_scroll_id)
  }
}


