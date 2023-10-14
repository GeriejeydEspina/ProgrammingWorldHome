const text = "Programming World is an innovative and comprehensive platform designed to cater to the needs of programming enthusiasts and developers from all around the globe.";
                    const typingSpeed = 30;
                    const typingTextElement = document.getElementById("typing-text");
                
                    let charIndex = 0;
                
                    function typeText() {
                        if (charIndex < text.length) {
                            typingTextElement.innerHTML += text.charAt(charIndex);
                            charIndex++;
                            setTimeout(typeText, typingSpeed);
                        }
                    }
                
                    window.addEventListener("load", () => {
                        typeText();
                    });

var navLinks = document.getElementById("navLinks");
                        function showMenu(){
                            navLinks.style.right = "0";
                        }
                        function hideMenu(){
                            navLinks.style.right = "-200px";
                        }
