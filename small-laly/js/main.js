// 获取当前系统时间
function get_time(){
  var date = new Date()
  var string = ""
  string += date.getFullYear() + '.' + (date.getMonth()+1) + '.' + date.getDate()
  return string
}
//检查信息是否未填
function check_null(value,id){
  if(value == document.getElementById(id.substring(1)).defaultValue){ $(id).addClass("error") }
  else{ $(id).removeClass("error") }
  return value
}
// 获取当前系统时间
function get_time(){
  var show_day =new Array(' ','月','火','水','木','金','土','日');
  var date = new Date()
  var string = ""
  string += date.getFullYear() + '.' + (date.getMonth()+1) + '.' + date.getDate() + '(' + show_day[date.getDay()] +')'
  return string
}
//检查信息是否未填
function check_null(value,id){
  if(value == document.getElementById(id.substring(1)).defaultValue){
    $(id).addClass("error");
    alert(document.getElementById(id.substring(1)).name + "未填，请检查！");
  }
  else{ $(id).removeClass("error") }
  return value
}
// 复制文本框内代码
function copytoclip(){
    var Url = document.getElementById("result");
    if (Url.value == '') {
        alert("文本框内为空")
    }
    else {
        Url.select();
        document.execCommand("Copy");
        alert("已复制代码到剪切板");
    }
}
// 获取8套结果列表
function get_8result(result_array,i){
    var tax_text = ''
    var result = '  <li>\n    <p class="rank">NO.' + (i + 1) + '</p>\n'
    var img_url = result_array[1].replace(/http:\/\/image.rakuten.co.jp\/small-laly\/(.*?).jpg/i, "$1");
    var iscontaintest = img_url.indexOf(".jpg")== -1 ? false : true;
    if (document.getElementById('tax_' + (i + 1)).checked) {tax_text = '<span >(税込) 送料別</span>'};
    result += '    <a href="' + result_array[0] + '" target="_blank">\n'
    if (iscontaintest) {
        result += '      <img class="item" src="' + img_url + '">\n    </a><br>\n'
    } else{
        result += '      <img class="item" src="http://thumbnail.image.rakuten.co.jp/@0_mall/small-laly/' + img_url + '.jpg?_ex=250x250&s=2&r=1">\n    </a><br>\n'
    };
    result += '    <p class="name">' + result_array[2] + '</p>\n'
    result += '    <p class="price">' + result_array[3] + tax_text + '</p>\n'
    result += '  </li>\n'
    return result
}
// 显示8套最终结果
function show_8result(){
    var result_array = [[0],[0],[0],[0],[0],[0],[0],[0]]
    var string = ""
    $.each(result_array, function(i) {
        result_array[i][0] = check_null($('#goods-link_' + (i + 1)).val(),'#goods-link_' + (i + 1))
        result_array[i][1] = check_null($('#image-url_' + (i + 1)).val(),'#image-url_' + (i + 1))
        result_array[i][2] = check_null($('#goods-note_' + (i + 1)).val(),'#goods-note_' + (i + 1))
        result_array[i][3] = check_null($('#goods-price_' + (i + 1)).val(),'#goods-price_' + (i + 1))
        string += get_8result(result_array[i], i)
    });
    $("#result").val("<ul>\n" + string + "</ul>")
}


// 获取5套结果列表
function get_5result(result_array,i){
    var position = ''
    var tax_text = ''
    var img_url = result_array[1].replace(/http:\/\/image.rakuten.co.jp\/small-laly\/(.*?).jpg/i, "$1");
    var iscontaintest = img_url.indexOf(".jpg")== -1 ? false : true;
    var result = '    <li>\n      <div class="ureitem">\n'
    if (i < 3) {position = 'right'} else{position = 'left'};
    if (document.getElementById('tax_' + (i + 1)).checked) {tax_text = '<span >(税込) 送料別</span>'};
    result += '        <a href="' + result_array[0] + '" target="_top" bigimage="' + result_array[1] + '" class="viparcher_image_zoom_list" position="' + position + '" >\n'
    if (iscontaintest) {
        result += '          <img class="item" src="' + img_url + '">\n'
    } else{
        result += '          <img class="item" src="http://thumbnail.image.rakuten.co.jp/@0_mall/small-laly/' + img_url + '.jpg?_ex=250x250&s=2&r=1">\n'
    };
    result += '          <p class="name">' + result_array[2] + '</p>\n'
    result += '          <p class="price">' + result_array[3] + tax_text + '</p>\n'
    result += '        </a>\n      </div>\n    </li>\n'
    return result
}
// 显示5套最终结果
function show_5result(){
    var result_array = [[0],[0],[0],[0],[0]]
    var string = ""
    var result = '<div id="ranking">\n  <div style="font-size:11px;margin:5px 0;font-family:arial">' + get_time() + '更新</div>\n  <div id="ookan">\n'
    $.each(result_array, function(i) {
        result_array[i][0] = check_null($('#goods-link_' + (i + 1)).val(),'#goods-link_' + (i + 1))
        result_array[i][1] = check_null($('#image-url_' + (i + 1)).val(),'#image-url_' + (i + 1))
        result_array[i][2] = check_null($('#goods-note_' + (i + 1)).val(),'#goods-note_' + (i + 1))
        result_array[i][3] = check_null($('#goods-price_' + (i + 1)).val(),'#goods-price_' + (i + 1))
        string += get_5result(result_array[i], i)
    });
    var id_prefix = ['#goods-link_','#image-url_','#goods-note_','#goods-price_']
    var id_suffix = [6,7,8]
    $.each(id_prefix, function(i) {
        $.each(id_suffix, function(j) {
            $(id_prefix[i] + id_suffix[j]).removeClass("error")
        });
    });
    for (var i = 1; i <= 5; i++) {
        result += '    <li><div class="ookanitem"><img src="images/rank_' + i + '.jpg" border="0"></div></li>\n'
    }
    result += '  </div>\n  <div id="rankitem">\n' + string + '  </div>\n</div>'
    $("#result").val( result )
}

// 获取每日更新8套结果列表
function get_daynewresult(result_array,i){
    var tax_text = ''
    var result = '\n    <li>\n'
    var img_url = result_array[1].replace(/http:\/\/image.rakuten.co.jp\/small-laly\/(.*?).jpg/i, "$1");
    var iscontaintest = img_url.indexOf(".jpg")== -1 ? false : true;
    if (document.getElementById('tax_' + (i + 1)).checked) {tax_text = '<span >(税込) 送料別</span>'};
    result += '      <a href="' + result_array[0] + '" target="_blank">\n'
    if (iscontaintest) {
        result += '        <img src="' + img_url + '">\n      </a><br>'
    } else{
        result += '        <img src="http://thumbnail.image.rakuten.co.jp/@0_mall/small-laly/' + img_url + '.jpg?_ex=250x250&s=2&r=1">\n      </a><br>\n'
    };
    result += '      <p class="name">' + result_array[2] + '</p>\n'
    result += '      <p class="price">' + result_array[3] + tax_text + '</p>\n'
    result += '    </li>'
    return result
}
// 显示每日更新8套最终结果
function show_daynewresult(){
    var result_array = [[0],[0],[0],[0],[0],[0],[0],[0]]
    var string = ""
    $.each(result_array, function(i) {
        result_array[i][0] = check_null($('#goods-link_' + (i + 1)).val(),'#goods-link_' + (i + 1))
        result_array[i][1] = check_null($('#image-url_' + (i + 1)).val(),'#image-url_' + (i + 1))
        result_array[i][2] = check_null($('#goods-note_' + (i + 1)).val(),'#goods-note_' + (i + 1))
        result_array[i][3] = check_null($('#goods-price_' + (i + 1)).val(),'#goods-price_' + (i + 1))
        string += get_daynewresult(result_array[i], i)
    });
    $("#result").val('<div class="top">\n  <p>' + get_time() + '更新</p>\n  <ul>' + string + "\n  </ul>\n</div>")
}
// 获取细节图 product 页结果列表
function get_productresult(number){
    var result = '<div id="Adv">'
    var file_path = check_null($('#file_path').val(),'#file_path')
    var file_name = check_null($('#file_name').val(),'#file_name')
    for (var i = 1; i < (number + 1); i++) {
        result += '<div class="ImgList">' + '<img src="http://image.rakuten.co.jp/small-laly/cabinet/' + file_path + '/'
        result += file_name + '_0' + i + '.jpg" width="700"/></div>'
    };
    result += '<ul class="button">'
    for (var j = 1; j < (number + 1); j++) {
        j == 1 ? result += '<li class="hover">' : result += '<li>'
        result += '<img src="http://image.rakuten.co.jp/small-laly/cabinet/' + file_path + '/'
        result += file_name + '_0' + j + '.jpg" width="100%"/></li>'
    };
    result += '</ul></div>'
    return result
}
// 显示细节图 product 页最终结果
function show_product(){
    var number = + check_null($('#number').val(),'#number')
    var string = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title></title><script type="text/javascript" src="../js/jquery.js"></script>'
    string += '<style>*{margin:0;padding:0}img{border:0}#Adv{width:100%;height:500px;position:relative}#Adv .ImgList{width:700;height:540px!important;position:absolute;left:2px;top:-1px;z-index:2}'
    string += '#Adv ul.button li{width:135px;height:85px!important;background:#000;border:1px dotted #fff;float:left;margin:0 1.5px;list-style-type:none}#Adv ul.button{height:113px;position:absolute;'
    string += 'left:0;top:442px!important;z-index:3;display:inline-block;width:700px}#Adv ul.button li{border:solid 1px #FFF}#Adv ul.button li.hover{border:solid 1px #999}</style></head><body>'
    string += get_productresult(number)
    string += '<script type="text/javascript">var _index=0;var timePlay=null;$("#Adv .ImgList").eq(0).show().siblings("div").hide();$("ul.button li").hover(function(){clearInterval(timePlay);'
    string += '_index=$(this).index();$(this).addClass("hover").siblings().removeClass("hover");$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut()},function(){autoPlay()});'
    string += 'function autoPlay(){timePlay=setInterval(function(){_index++;if(_index<6){$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");'
    string += '$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut()}else{_index=-1}},2000)}autoPlay();</script></body></html>'
    $("#result").val( string )
}
