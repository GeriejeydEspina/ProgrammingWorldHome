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

const slider = document.querySelector('.slider');
                const slides = document.querySelectorAll('.slide');
                const prevBtn = document.querySelector('.prev-btn');
                const nextBtn = document.querySelector('.next-btn');
                let slideIndex = 0;
                    nextBtn.addEventListener('click', () => {
                        slideIndex++;
                    if (slideIndex >= slides.length) {
                        slideIndex = 0;
                    }
                    updateSlider();
                    });
                    prevBtn.addEventListener('click', () => {
                        slideIndex--;
                    if (slideIndex < 0) {
                        slideIndex = slides.length - 1;
                    }
                    updateSlider();
                    });
                function updateSlider() {
                    const translateValue = -slideIndex * 100 + '%';
                        slider.style.transform = `translateX(${translateValue})`;
                }

window.onmousemove = function(e){
                    let x = e.clientX/3;
                    box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
                }
