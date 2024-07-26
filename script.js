// List of element IDs to animate
const elementIds = [
  'rect39-code-opening',
  'rect39-main-func',
  'rect39-func-var',
  'rect39-paranthesis-open',
  'rect39-function-paranthesis-close',
  'rect39-variable-declaration',
  'rect39-variable-name',
  'rect39-variable-assign',
  'rect39-variable-value',
  'rect39-scope-function-declaration',
  'rect39-scope-function-name',
  'rect39-scope-function-paranthesis',
  'rect39-scope-function-variable',
  'rect39-scope-function-variable-value',
  'rect39-scope-function-paranthesis-close',
  'rect39-variable-declaration-2',
  'rect39-variable-name-2',
  'rect39-variable-assign-2',
  'rect39-variable-value-2',
  'rect39-scope-function-declaration-2',
  'rect39-scope-function-name-2',
  'rect39-scope-function-paranthesis-2',
  'rect39-scope-function-variable-2',
  'rect39-scope-function-variable-value-2',
  'rect39-scope-function-paranthesis-close-2',
  'rect89',
  'rect90',
  'rect91',
  'rect90-7',
  'rect90-7-5'
];

// Function to animate elements
function animateElements() {
  let delay = 0; // Start immediately
  const increment = 200; // Delay increment for each element

  // Function to reset elements and start the animation again
  function resetAndAnimate() {
    elementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.visibility = 'hidden'; // Hide all elements
      }
    });

    delay = 0; // Reset delay to start the animation cycle again

    elementIds.forEach(id => {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.style.visibility = 'visible'; // Make element visible
        }
      }, delay);
      delay += increment; // Increment the delay for the next element
    });
  }

  // Start the animation loop
  function loopAnimation() {
    resetAndAnimate();
    setTimeout(loopAnimation, delay + increment); // Restart animation after all elements have been shown
  }

  loopAnimation(); // Initial call to start the animation loop
}

// Call the function to start the animation
animateElements();


// hand movement


  document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('hand-movement');
    if (!element) {
      console.error('Element not found');
      return;
    }

    let positionX = 0; // Initial horizontal position in SVG coordinates
    let positionY = 0; // Initial vertical position in SVG coordinates
    const distance = 60; // Distance to move horizontally (in SVG coordinates)
    let speedX = 2; // Speed of animation horizontally (in SVG coordinates)
    let speedY = 0; // Speed of animation vertically (no vertical movement in this example)
    const startPositionX = -223; // Starting X-coordinate in the SVG viewBox
    const startPositionY = -163; // Starting Y-coordinate in the SVG viewBox

    function animate() {
      positionX += speedX;

      // Reverse direction if boundary is reached
      if (positionX > distance || positionX < 0) {
        speedX *= -1;
      }

      // Apply the transform, considering the SVG viewBox origin
      element.style.transform = `translate(${startPositionX + positionX}px, ${startPositionY + positionY}px)`;

      // Call the animate function again on the next frame
      requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
  });

//small banner color transformation
document.addEventListener('DOMContentLoaded', function () {
const rect = document.getElementById('rect89');
if (!rect) {
console.error('Element not found');
return;
}

const colors = ['#ffa801', '#6c63ff', '#ff6f61', '#4caf50']; // Array of colors to cycle through
let colorIndex = 0; // Initial color index

// Function to change the color of the rectangle
function changeColor() {
colorIndex = (colorIndex + 1) % colors.length; // Move to the next color
rect.style.fill = colors[colorIndex]; // Set the new color
}

// Set the interval to change color every 2 seconds (2000 milliseconds)
setInterval(changeColor, 2000);
});


// day to night transition

document.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  const hour = now.getHours();
  const isDayTime = hour >= 6 && hour < 18; // Daytime is between 6 AM and 6 PM

  // Toggle class based on time
  if (isDayTime) {
    document.body.classList.remove('night');
  } else {
    document.body.classList.add('night');
  }
});


$('#toggle').click(function() {
  $(this).toggleClass('is-active');
  $('#navbarCollapse').toggleClass('is-active');
});


// carousal

var carousalV = document.getElementById('verticalWrapperId'),
    carousalH = document.getElementById('horizontalWrapperId'),
    cardsLength = 6; // Should always be equal to cards length

document.getElementById('leftBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      ssH = carousalH.scrollWidth / cardsLength,

      st = carousalV.scrollTop,
      ssV = carousalV.scrollHeight / cardsLength;

  if ((sl - ssH) <= 0) {
    carousalH.scrollTo({ left: 0, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl - ssH, behaviour: 'smooth' });
  }

  if ((st - ssV) <= 0) {
    carousalV.scrollTo({ top: 0, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st - ssV, behaviour: 'smooth' });
  }
});

document.getElementById('rightBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      cw = carousalH.scrollWidth,
      ssH = cw / cardsLength,

      st = carousalV.scrollTop,
      ch = carousalV.scrollHeight,
      ssV = ch / cardsLength;

  if ((sl + ssH) >= cw) {
    carousalH.scrollTo({ left: cw, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl + ssH, behaviour: 'smooth' });
  }

  if ((st + ssV) >= ch) {
    carousalV.scrollTo({ top: ch, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st + ssV, behaviour: 'smooth' });
  }
});
