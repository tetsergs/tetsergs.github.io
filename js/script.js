//preloader
var hellopreloader = document.getElementById("hellopreloader_preload");
    function fadeOutnojquery(el){el.style.opacity = 1;
        var interhellopreloader = setInterval(
            function(){el.style.opacity = el.style.opacity - 0.05;
                if (el.style.opacity <=0.05){ 
                    clearInterval(interhellopreloader);
                    hellopreloader.style.display = "none";
                }},16);}
                window.onload = function(){
                    setTimeout(
                        function(){
                            fadeOutnojquery(hellopreloader);
                        },1000);
                    }; 

//typing effect for main section
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});

/* //simple parallax for items section
let image = document.getElementsByClassName('parallax');
new simpleParallax(image, {
    orientation: 'down',
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
}); */