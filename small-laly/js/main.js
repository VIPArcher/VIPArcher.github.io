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
// 获取8套结果列表
function get_8result(result_array,i){
    var tax_text = ''
    var result = '<li><p class="rank">NO.' + (i + 1) + '</p>'
    var img_url = result_array[1].replace(/\/small-laly\/(.*?).jpg/i, "$1");
    if (document.getElementById('tax_' + (i + 1)).checked) {tax_text = '<span >(税込) 送料別</span>'};
    result += '<a href="' + result_array[0] + '" target="_blank">'
    result += '<img class="item" src="http://thumbnail.image.rakuten.co.jp/@0_mall/small-laly/' + img_url + '.jpg?_ex=250x250&s=2&r=1"></a><br>'
    result += '<p class="name">' + result_array[2] + '</p>'
    result += '<p class="price">' + result_array[3] + tax_text + '</p>'
    result += '</li>'
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
    $("#result").val("<ul>" + string + "</ul>")
}


// 获取5套结果列表
function get_5result(result_array,i){
    var position = ''
    var tax_text = ''
    var img_url = result_array[1].replace(/\/small-laly\/(.*?).jpg/i, "$1");
    var result = '<li><div class="ureitem">'
    if (i <= 3) {position = 'right'} else{position = 'left'};
    if (document.getElementById('tax_' + (i + 1)).checked) {tax_text = '<span >(税込) 送料別</span>'};
    result += '<a href="' + result_array[0] + '" target="_top" bigimage="' + result_array[1] + '" class="viparcher_image_zoom_list" position="' + position + '" >'
    result += '<img class="item" src="http://thumbnail.image.rakuten.co.jp/@0_mall/small-laly/' + img_url + '.jpg?_ex=250x250&s=2&r=1">'
    result += '<p class="name">' + result_array[2] + '</p>'
    result += '<p class="price">' + result_array[3] + tax_text + '</p>'
    result += '</a></div></li>'
    return result
}
// 显示5套最终结果
function show_5result(){
    var result_array = [[0],[0],[0],[0],[0]]
    var string = ""
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
    $("#result").val('<div id="ranking"><div style="font-size:11px;margin:5px 0;font-family:arial">'+ get_time() + '更新</div><div id="ookan"><li><div class="ookanitem"><img src="images/rank_1.jpg" border="0"></div></li><li><div class="ookanitem"><img src="images/rank_2.jpg" border="0"></div></li><li><div class="ookanitem"><img src="images/rank_3.jpg" border="0"></div></li><li><div class="ookanitem"><img src="images/rank_4.jpg" border="0"></div></li><li><div class="ookanitem"><img src="images/rank_5.jpg" border="0"></div></li></div><div id="rankitem">' + string + '</div></div>')
}
