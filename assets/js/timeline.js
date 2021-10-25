(() => {

    $(window).resize(function(){

        var width = window.innerWidth;
        
        if(width < 769){
        $("#about-history").hide();

        }
        
        else {
            
                const texElems = document.querySelectorAll('.tex');
                const yearElems = document.querySelectorAll('.year_wrap');
                let currentItem = yearElems[0]; // 현재 visible 클래스가 붙어 활성화된 .year_wrap 클래스를 지정.

                for (let i = 0; i < texElems.length; i++) {
                    // texElems[i].setAttribute('data-index', i);
                    texElems[i].dataset.index = i;
                    yearElems[i].dataset.index = i;
                }

                function activate() {
                    currentItem.classList.add('visible');
                }

                function inactivate() {
                    currentItem.classList.remove('visible');
                }

                window.addEventListener('scroll', () => {
                    let tex;
                    let boundingRect;

                    for (let i = 0; i < texElems.length; i++) {
                        tex = texElems[i];
                        boundingRect = tex.getBoundingClientRect();
                        
                        if (boundingRect.top > window.innerHeight * 0.0 &&
                            boundingRect.top < window.innerHeight * 0.3) {

                                inactivate();
                                currentItem = yearElems[tex.dataset.index];
                                activate();
                            }
                    }
                });

                activate();

            
        }

        
        }).resize();
















})();
