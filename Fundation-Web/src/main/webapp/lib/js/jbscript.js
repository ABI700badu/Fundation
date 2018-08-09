/**
 * Created by lijb on 2018/7/16.
 */
/**
 * 在指定的元素控件上显示当前时间
 * hh:mm:ss
 * @param eelector
 */
function ui_time(eelector) {
    $(function () {
        var date=new Date();
        var timeStr=changeTimeFormat(date.getHours())+":"+changeTimeFormat(date.getMinutes())+":"+changeTimeFormat(date.getSeconds());
        $(eelector).text(timeStr);
    });
}
function changeTimeFormat(num) {
    if(num>=0&&num<=9){
        return "0"+num;
    }else{
        return num;
    }
}
/**
 * 更改控件弹起与按下的颜色
 * @param selectoer
 * @param colorUp 未按下的颜色状态
 * @param colorDown 按下时候的颜色状态
 */
function updateClickColor(selectoer,colorUp,colorDown) {
    $(function () {
        $(selectoer).css("background-color",colorUp);
        $(selectoer).mousedown(function () {
            $(selectoer).css("background-color",colorDown);
        })
        $(selectoer).mouseup(function () {
            $(selectoer).css("background-color",colorUp);
        })
    })
}
/**
 * 更新元素的值
 * @param selectoer
 * @param newValue
 */
function updateEleValue(selectoer,newValue) {
    $(function () {
        $(selectoer).text(newValue);
    })
}
/**
 * 定义一个StringBuffer类
 *
 */
function  StringBuffer (value) {
   this.__strings__=[];
   this.__strings__.push(value);
};
StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
    return this;
};
StringBuffer.prototype.toString = function () {
    return this.__strings__.join('');
};
StringBuffer.prototype.clear = function () {
    this.__strings__ = [];
};
StringBuffer.prototype.size = function () {
    return this.__strings__.length;
};
