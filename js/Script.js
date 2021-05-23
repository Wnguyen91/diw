/* CSS Document */
/*jshint esversion: 6 */
//Animate my counter from 0 to set number (6)
$({counter: 0}).animate({counter: 200}, {
  //Animate over a period of 2seconds
  duration: 6000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() { 
	  "use strict";
	 //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.total').text(Math.ceil(this.counter));
  }, 
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});

$({counter: 0}).animate({counter: 400}, {
  duration: 10000,
  easing:'linear',
  step: function() { 
	  "use strict";
    $('.total2').text(Math.ceil(this.counter));
  }, 
});

$({counter: 0}).animate({counter: 700}, {
  duration: 13000,
  easing:'linear',
  step: function() { 
	  "use strict";
    $('.total3').text(Math.ceil(this.counter));
  }, 
});

$({counter: 0}).animate({counter: 900}, {
  duration: 20000,
  easing:'linear',
  step: function() { 
	  "use strict";
    $('.total4').text(Math.ceil(this.counter));
  }, 
});



const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('a, button').forEach(
	  elem => {
    elem.addEventListener('mouseenter', () => (onElement = elem))
    elem.addEventListener('mouseleave', () => (onElement = undefined))
  })
});


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}