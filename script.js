var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingElement", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye
function shrinkPointer(){
    //define deafult scale value
    var xscale  = 1;
    var yscale  = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY; 

        xscale = gsap.utils.clamp(.8,1.2, xdiff);
        yscale = gsap.utils.clamp(.8,1.2, ydiff);
    }); 

}

shrinkPointer();


function showMousePointer() {
    const pointer = document.querySelector('#pointer');

    function updatePointerPosition(x, y) {
        pointer.style.transform = `translate(${x}px, ${y}px)`;
    }

    function hidePointer() {
        pointer.style.display = "none";
    }

    function showPointer() {
        pointer.style.display = "block";
    }

    // Mouse events
    document.body.addEventListener("mouseenter", showPointer);
    document.body.addEventListener("mouseleave", hidePointer);
    document.body.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        updatePointerPosition(x, y);
    });

    // Touch events
    document.body.addEventListener("touchstart", (event) => {
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        showPointer();
        updatePointerPosition(x, y);
    });

    document.body.addEventListener("touchmove", (event) => {
        event.preventDefault(); // Prevent scrolling
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        updatePointerPosition(x, y);
    });

    document.body.addEventListener("touchend", hidePointer);
    document.body.addEventListener("touchcancel", hidePointer);
}

showMousePointer();

