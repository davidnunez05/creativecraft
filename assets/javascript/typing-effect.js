const phrases = [
    "Avanza.",
    "Destácate.",
    "Conéctate.",
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  const typingSpeed = 140; // in milliseconds
  const highlightDuration = 1000; // in milliseconds
  
  const typingTextElement = document.getElementById('typing-text');
  
  function type() {
    if (charIndex <= phrases[phraseIndex].length) {
      // Typing the text without highlighting
      typingTextElement.innerHTML = "&lt;" + phrases[phraseIndex].substring(0, charIndex) + "&gt;";
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      // Highlighting the typed text after it's fully typed
      typingTextElement.innerHTML = "&lt;<span class='highlight'>" + phrases[phraseIndex] + "</span>&gt;";
      
      // Remove highlight after a short duration
      setTimeout(() => {
        typingTextElement.innerHTML = "&lt;&gt;";
        
        // Move to the next phrase or start over if reached the end
        setTimeout(() => {
          phraseIndex = (phraseIndex + 1) % phrases.length;
          charIndex = 0;
          type();
        }, 500); // Wait 0.5 seconds before typing next phrase
      }, highlightDuration);
    }
  }
  
  // Start typing
  setTimeout(type, 1000); // Wait 1 second before starting
  