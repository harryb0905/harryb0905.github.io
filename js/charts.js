 $(document).ready(function() {
      var horizontalBarChartData = {
          labels: ["HTML", "CSS", "JavaScript", "PHP"],
          datasets: [{
              backgroundColor: "#00b0f0",
              data: [40,30,20,10]
          }]
      };
      var ctx = document.getElementById("barChart").getContext("2d");
      var myHorizontalBar = new Chart(ctx, {
          type: 'horizontalBar',
          data: horizontalBarChartData,
          options: {



              scales: {

                yAxes:[{
                    scaleLabel: {
                        display: true,
                        labelString: 'Language',
                    },
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
              responsive: true,
              legend: {
                  display: false,
              },
              title: {
                  display: true,
                  text: 'Programming Languages Used (%)'
              },

              responsiveAnimationDuration: 1500
          }
      });
});