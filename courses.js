const text = " Code your dreams into reality with Programming World!";
                    let index = 0;
                    let typingInterval;
                
                    function type() {
                        document.getElementById('text').textContent += text[index];
                        index++;
                        if (index >= text.length) {
                            clearInterval(typingInterval);
                        }
                    }
                
                    typingInterval = setInterval(type, 100);


                    
                    function updateSlider() {
                        const translateValue = -slideIndex * 100 + '%';
                            slider.style.transform = `translateX(${translateValue})`;
                    }
                    
                    let box = document.querySelector('.box');
                    window.onmousemove = function(e){
                        let x = e.clientX/3;
                        box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
                    }
