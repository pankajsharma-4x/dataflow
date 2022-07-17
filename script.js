Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Column chart with negative values'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
    }]
  });

// Toggler Functioning

var demo = document.getElementById("demo");
var demo2 = document.getElementById("demo2");

var btnTabA = document.getElementById("showTableA");
var btnTabB = document.getElementById("showTableB");

btnTabA.onclick = function () {
    demo.style.display = "block";
    demo2.style.display = "none";
}
btnTabB.onclick = function () {
    demo.style.display = "none";
    demo2.style.display = "block";
}

$(document).ready(function(){

  $(".menu-toggle-btn").click(function(){
      $(this).toggleClass("fa-times");
      $(".navigation-menu").toggleClass("active");
  });
  
  })


  // changing the minus (-) to plus (+) for accordian 

$(".question").click(function() {
  if ($(this).next().is(":visible")) {
    $(this).removeClass("active");
  } else if ($(".question").next().is(":hidden")) {
    $('.question').removeClass("active");
    $(this).addClass("active");
  }
});

// Fullscreen with JavaScript
var elem = document.getElementById("accordionExample");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
  
// Alert Modal Type
		$(document).on('click', '#success', function(e) {
			swal(
				'Success',
				'You clicked the <b style="color:green;">Success</b> button!',
				'success'
			)
		});