
// 서브메뉴 구현
$("#mainMenu>li").mouseover(function(){
    $(this).children(".subMenu").stop().slideDown();
});
$("#mainMenu>li").mouseout(function(){
    $(this).children(".subMenu").stop().slideUp();
});

//슬라이드이미지 구현
function fnSlide() {
$("#slideImgFrame").animate({"margin-left" : "-800px"},1000, function(){
    $("#slideImgFrame").css({"margin-left" : "0"});
    $("#slideImgFrame a:first").insertAfter("#slideImgFrame a:last");
});
};
setInterval(fnSlide, 3000);

//모달레이어팝업 구현
function fnModal() {
    document.getElementById("modalLayerPopupBg").style.display="block";
}
function fnClose() {
    document.getElementById("modalLayerPopupBg").style.display="none";
}
