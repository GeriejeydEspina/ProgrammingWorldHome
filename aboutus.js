const welcomeText = document.getElementById('welcomeText');
                const textToType = "Welcome to Programming World!";
                let index = 0;

            function typeText() {
                if (index < textToType.length) {
                    welcomeText.textContent += textToType.charAt(index);
                        index++;
                    setTimeout(typeText, 100); 
                }
            }

                    typeText(); 

                    const changeTextButton = document.getElementById('changeTextBtn');
                    const changeableText = document.getElementById('changeableText');

                        changeTextButton.addEventListener('click', () => {
                    const textToType = "Thanks for Liking Us, Happy Coding! 😊 💻 ☕";
                    let index = 0;

            function typeText() {
                if (index < textToType.length) {
                    changeableText.textContent += textToType.charAt(index);
                        index++;
                    setTimeout(typeText, 30);
                    }
                }

                    typeText();
                    }
                );
var navLinks = document.getElementById("navLinks");
                    function showMenu(){
                        navLinks.style.right = "0";
                }
                    function hideMenu(){
                        navLinks.style.right = "-200px";
                }
