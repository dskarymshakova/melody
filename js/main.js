$(document).ready(function () {
    var currentFloor =2; //переменная, где хранится каждый этаж
    var cntUp = $(".cnt-up"); //кнопка увеличения счетчика
    var cntDown = $(".cnt-down"); //кнопка уменьшения счетчика
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var modal = $('.modal');
    var modalCloseBtn = $('.modal-close-btn');
    var viewFlatsBtn = $('.view-flats');
    
    var modalPath =$("modal-image");
    var currentFlat =1; //переменная, где хранится каждая квартира

    console.log("site is ready for manipulations") 
    floorPath.on('mouseover', function (){ //при наведении на этаж отображается счетчик 
        floorPath.removeClass("current-floor"); //удаление активного класса этажа
        currentFloor = $(this).attr("data-floor"); //получение значения текущего этажа
        $(".counter").text(currentFloor); //запись значения этажа в счетчик
    });
    
    floorPath.on("click", toggleModal); // при клике на этаж вызвать функцию открытия мод окна 
    modalCloseBtn.on("click", toggleModal);
    viewFlatsBtn.on("click", toggleModal);

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
    //функ откр и закр модальное окно
   function toggleModal(){
        modal.toggleClass('is-open');
    }

    modalPath.on('mouseover', function (){ //при наведении на этаж отображается счетчик 
        modalPath.removeClass("current-flat"); //удаление активного класса этажа
        currentFlat = $(this).attr("data-flat"); //получение значения текущего этажа
        $('[data-flat="${currentFlat}"]').addClass('current-flat');
    });




});