function funCheckInt(e){return keyRestrict(e,'0123456789');}
function getKeyCode(e){if(window.event)
return window.event.keyCode;else if(e)
return e.which;else
return null;}
function keyRestrict(e,validchars){var key='',keychar='';key=getKeyCode(e);if(key==null)return true;keychar=String.fromCharCode(key);keychar=keychar.toLowerCase();validchars='-+'+validchars.toLowerCase();if(validchars.indexOf(keychar)!=-1)
return true;if(key==null||key==0||key==8||key==9||key==13||key==27)
return true;return false;}
function formatNumber(num){return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}
function CheckMobile(){var mobilephone=$("#mobilephone").val();$("#mobile0").val(mobilephone);}
function IsEmail(email){var regex=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(!regex.test(email)){return false;}else{return true;}}
function validatePhone(txtPhone){var a=document.getElementById(txtPhone).value;var filter=/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;if(filter.test(a)){return true;}
else{return false;}}
function IsDisabledOrder(){var btnOrder=$('.btn-order');btnOrder.prop('disabled',true);}
function IsLikeTour(TourId,IsStatus){var doc=$('#TourLike_'+TourId);if(IsStatus==="1"){doc.attr('class','icon icon--heart-filled');}
else{doc.attr('class','icon icon--heart');}}
function SetTimeBooking(){$("#timerecive").val("14:00");$("#timereturn").val("12:00");}
function success(msg,title){toastr.options={"closeButton":false,"debug":false,"newestOnTop":false,"progressBar":true,"positionClass":"toast-right-center","preventDuplicates":true,"onclick":null,"showDuration":"300","hideDuration":"1000","timeOut":"3000","extendedTimeOut":"1000","showEasing":"swing","hideEasing":"linear","showMethod":"fadeIn","hideMethod":"fadeOut"}
var d=Date();toastr.success(msg,title);return false;}
function warning(msg,title){toastr.options={"closeButton":false,"debug":false,"newestOnTop":false,"progressBar":true,"positionClass":"toast-right-center","preventDuplicates":true,"onclick":null,"showDuration":"300","hideDuration":"1000","timeOut":"3000","extendedTimeOut":"1000","showEasing":"swing","hideEasing":"linear","showMethod":"fadeIn","hideMethod":"fadeOut"}
var d=Date();toastr.warning(msg,title);return false;}
function error(msg,title){toastr.options={"closeButton":false,"debug":false,"newestOnTop":false,"progressBar":true,"positionClass":"toast-right-center","preventDuplicates":true,"onclick":null,"showDuration":"300","hideDuration":"1000","timeOut":"3000","extendedTimeOut":"1000","showEasing":"swing","hideEasing":"linear","showMethod":"fadeIn","hideMethod":"fadeOut"}
var d=Date();toastr.error(msg,title);return false;}