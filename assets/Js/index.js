

$(document).ready(function () {
    var owl = $(".owl-carousel-1");
    owl.owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 1150,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
});

var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';


$(document).ready(function () {
    var owl = $(".owl-carousel-2");
    owl.owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 1150,

        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    })
        .on('changed.owl.carousel', syncPosition);

    function syncPosition(el) {
        $owl_slider = $(this).data('owl.carousel');
        var loop = $owl_slider.options.loop;

        if (loop) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
        } else {
            var current = el.item.index;
        }

        var owl_thumbnail = sync2.data('owl.carousel');
        var itemClass = "." + owl_thumbnail.options.itemClass;


        var thumbnailCurrentItem = sync2
            .find(itemClass)
            .removeClass("synced")
            .eq(current);

        thumbnailCurrentItem.addClass('synced');

        if (!thumbnailCurrentItem.hasClass('active')) {
            var duration = 1000;
            sync2.trigger('to.owl.carousel', [current, duration, true]);
        }
    }
});


$(document).ready(function () {
    var owl = $(".owl-carousel-3");
    owl.owlCarousel({
        loop: false,
        nav: true,
        margin: 10,
        items: 5,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 4,
            },
            1000: {
                items: 5,
            },
        },

        onInitialized: function (e) {
            var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
            thumbnailCurrentItem.addClass('synced');
        },
    })
        .on('click', thumbnailItemClass, function (e) {
            e.preventDefault();
            var duration = 500;
            var itemIndex = $(e.target).parents(thumbnailItemClass).index();
            sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
        }).on("changed.owl.carousel", function (el) {
            var number = el.item.index;
            $owl_slider = sync1.data('owl.carousel');
            $owl_slider.to(number, 100, true);
        });
});





function myCloseFunction() {
    document.getElementById("side-nav").style.transform = "translateX(-100%)"
}

document.getElementById("close-nav").addEventListener("click", function () {
    myCloseFunction();
});

function myOpenFunction() {
    document.getElementById("side-nav").style.transform = "translateX(0)"
}

document.getElementById("open-nav").addEventListener("click", function () {
    myOpenFunction();
});



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var val1 = document.getElementById('minus');
if (document.getElementById('input').value === '0') {
    val1.disabled = true
}

const plusBtn = document.getElementById('plus');

plusBtn.addEventListener('click', function () {
    var val1 = document.getElementById('minus');
    val1.disabled = false;
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const totalPlus = newInputBtn + 1;
    document.getElementById('input').value = totalPlus;

});
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function () {

    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const totalPlus = newInputBtn - 1;
    if (totalPlus === 0) {
        val1.disabled = true;
    }
    document.getElementById('input').value = totalPlus;

});






