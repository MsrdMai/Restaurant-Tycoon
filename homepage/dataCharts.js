var options = {
    type: 'line',
    data: {
      labels: ['1 May','5 May','10 May','15 May','20 May','25 May','31 May'],
      datasets: [
          {
            label: 'ต้นทุน',
            data: [1254, 1954, 3555, 5424, 254, 3545],
            backgroundColor: 'rgb(255, 158, 100, 0.2)',
            borderColor: 'rgb(255, 158, 100)',
            spanGaps: true,
            borderWidth: 1
          },	
              {
                label: 'กำไร',
                data: [700, 1100, -500, -800, 300, 7000],
                backgroundColor: 'rgb(255, 106, 106, 0.2)',
                borderColor: 'rgb(255, 106, 106)',
                spanGaps: true,
                borderWidth: 1
            },	
            {
              label: 'ลูกค้า',
              data: [750, 110, 850, 980, 430, 730],
              backgroundColor: 'rgb(255, 204, 94, 0.2)',
              borderColor: 'rgb(255, 204, 94)',
              spanGaps: true,
              borderWidth: 2
          }
        ]
    },
    options: {
        scales: {
        }  
    }
  }
  
  var ctx = document.getElementById('canvas').getContext('2d');
  new Chart(ctx, options);