window.onload = function() {
     document.getElementById('portfolio-item-click').addEventListener('click', function() {
         var ctx = document.getElementById("myChart").getContext('2d');
         window.myChart = new Chart(ctx, {
             type: 'doughnut',
             data: {
                 labels: ["HTML", "CSS", "JavaScript", "PHP"],
                 datasets: [{
                     label: 'Programming Languages',
                     data: [39.4, 23.2, 36.5, 0.9],
                     backgroundColor: [
                         'rgba(255, 99, 132, 0.4)',
                         'rgba(54, 162, 235, 0.4)',
                         'rgba(255, 206, 86, 0.4)',
                         'rgba(75, 192, 192, 0.4)',
                     ],
                     borderColor: [
                         'rgba(255,99,132,1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                     ],
                     borderWidth: 1
                 }]
             },
             options: {
                  animationSteps: 100,
                  animationEasing: "easeOutBounce",
                  animateRotate: true,
                  animateScale: false,
                  responsive: true
             }
         });

     });
 };