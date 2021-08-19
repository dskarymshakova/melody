$(document).ready(function () {
    var currentFloor =2; //переменная, где хранится каждый этаж
    var cntUp = $(".cnt-up"); //кнопка увеличения счетчика
    var cntDown = $(".cnt-down"); //кнопка уменьшения счетчика
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    console.log("site is redy for manipulations") 
    floorPath.on('mouseover', function (){ //при наведении на этаж отображается счетчик 
        floorPath.removeClass("current-floor"); //удаление активного класса этажа
        currentFloor = $(this).attr("data-floor"); //получение значения текущего этажа
        $(".counter").text(currentFloor); //запись значения этажа в счетчик
    });
    
    cntUp.on("click", function(){ //при клике на стрелку вверх увеличивается счетчик
        if(currentFloor<18){ //ограничение этажа
            currentFloor++;
            convCurrFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, 
            useGrouping: false }); //форматирование переменной с этажом, чтобы было 01 вместо 1
            $(".counter").text(convCurrFloor); //запись значения этажа в счетчик
            floorPath.removeClass("current-floor"); 
            $(`[data-floor=${convCurrFloor 
            }]`).toggleClass('current-floor'); //подсвечивается текущий этаж
    }
}); 
    cntDown.on("click", function(){ //при клике на стрелку вверх уменьшается счетчик
        if(currentFloor> 2){
            currentFloor--;
            convCurrFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, 
            useGrouping: false });
            $(".counter").text(convCurrFloor);
            floorPath.removeClass("current-floor"); 
            $(`[data-floor=${convCurrFloor 
            }]`).toggleClass('current-floor'); //подсвечивается этаж
    }

    });

});