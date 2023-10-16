function animateTyping(element, text, speed) {
                let i = 0;
                const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
                }, speed);
            }

                const typingTitle = document.getElementById('typingTitle');
                const titleText = "CONTACT US";
                    animateTyping(typingTitle, titleText, 100);


                const contactForm = document.getElementById('contactForm');
                const confirmationMessage = document.getElementById('confirmationMessage');

                contactForm.addEventListener('submit', function (event) {
                    event.preventDefault();

                confirmationMessage.style.display = 'block';

                contactForm.reset();
                    }
                );
