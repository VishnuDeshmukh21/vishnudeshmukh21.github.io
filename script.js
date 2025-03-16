document.addEventListener("DOMContentLoaded", function () {
  const text = "Hey, I'm Vishnu 👋";
  let i = 0;
  function typeWriter() {
      if (i < text.length) {
          document.querySelector(".typing-effect").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
      }
  }
  typeWriter();
});
