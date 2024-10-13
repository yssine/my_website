document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between cursor and eye center
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

        // Move the pupil slightly in the direction of the cursor
        const offsetX = Math.cos(angle) * 10; // Adjust the multiplier for how far the pupil should move
        const offsetY = Math.sin(angle) * 10;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between cursor and eye center
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

        // Move the pupil slightly in the direction of the cursor
        const offsetX = Math.cos(angle) * 10; // Adjust the multiplier for how far the pupil should move
        const offsetY = Math.sin(angle) * 10;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
