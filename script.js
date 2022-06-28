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