
        $('.show-three').slick({
            dots: false,
            arrow: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),

            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 2
                    }
                },

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 786,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                  {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                 {
                    breakpoint: 440,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 390,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    