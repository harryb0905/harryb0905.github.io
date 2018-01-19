 $(document).ready(function() {

      var fishData = {
          labels: ["HTML", "CSS", "JavaScript", "PHP"],
          datasets: [{
//              backgroundColor: "#00b0f0",
              backgroundColor: ["rgba(211, 86, 54, 1)", "rgba(232, 217, 109, 1)", "rgba(82, 64, 120, 1)", "rgba(81, 94, 145, 1)"],
              data: [40,30,20,10]
          }]
      };

      var blink3DeskData = {
          labels: ["JavaScript", "HTML", "Python"],
          datasets: [{
              backgroundColor: ["rgba(82, 64, 120, 1)", "rgba(211, 86, 54, 1)", "rgba(67, 113, 161, 1)"],
              data: [92.3,5.6,2.1]
          }]
      };

      var blink3WebData = {
          labels: ["Python"],
          datasets: [{
              backgroundColor: ["rgba(67, 113, 161, 1)"],
              data: [100]
          }]
      };

      var opts = {
          responsive: true,
          scales: {
            yAxes:[{
                barThickness: 20,
                ticks: {
                    beginAtZero:true,
                },
            }],
            xAxes:[{

                scaleLabel: {
                    display: true,
                    labelString: '% of Project',
                },
                ticks: {
                    beginAtZero:true
                },
            }],
          },
          legend: {
              display: false,
          },
          title: {
              display: true,
              text: 'Programming Languages Used (%)'
          },
          responsiveAnimationDuration: 900
      };

//      var fishBar = document.getElementsByClassName("barChart")[0].getContext("2d");
//      var myHorizontalBar = new Chart(fishBar, {
//          type: 'horizontalBar',
//          data: fishData,
//          options: opts
//      });
//
//      var blinkBarDesk = document.getElementsByClassName("barChart")[1].getContext("2d");
//            var myHorizontalBar3 = new Chart(blinkBarDesk, {
//                type: 'horizontalBar',
//                data: blink3DeskData,
//                options: opts
//            });
//
//      var blinkBarWeb = document.getElementsByClassName("barChart")[2].getContext("2d");
//      var myHorizontalBar2 = new Chart(blinkBarWeb, {
//          type: 'horizontalBar',
//          data: blink3WebData,
//          options: opts
//      });

});