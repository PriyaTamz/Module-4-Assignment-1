
document.addEventListener("DOMContentLoaded", function(){
    var ele = document.getElementById("countdown");
    ele.textContent = 10;

    setTimeout(function() {
        ele.textContent = 9;

        setTimeout(function() {
            ele.textContent = 8;

            setTimeout(function() {
                ele.textContent = 7;

                setTimeout(function() {
                    ele.textContent = 6;

                    setTimeout(function() {
                        ele.textContent = 5;

                        setTimeout(function() {
                            ele.textContent = 4;

                            setTimeout(function() {
                                ele.textContent = 3;

                                setTimeout(function() {
                                    ele.textContent = 2;

                                    setTimeout(function() {
                                        ele.textContent = 1;

                                        setTimeout(function() {
                                            ele.textContent = "Happy Independence Day!";

                                        },1000);

                                    },1000);

                                },1000);
                            },1000);

                        },1000);

                    },1000);

                },1000);

            },1000);

        },1000);

    },1000);

});
