const ctx = document.getElementById('cloudChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cloud Status(%)', 'Storage Used(TB)', 'Active Services(#)'],
        datasets: [{
            label: 'Cloud Metrics',
            data: [95.6, 120, 74],
            backgroundColor: [
                'blue',
                'lightblue',
                'grey'
            ],
            borderColor: [
                'black',
                'black',
                'black'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Cloud Infrastructure Monitoring'
            }
        }
    }
});


const devctx = document.getElementById('devProjectsChart').getContext('2d');


new Chart(devctx,{

    type:'pie',
    data:{
        labels:['Game Development', 'Mobile Apps', 'Websites'],
        datasets:[{
            data:[60,75,65],
            backgroundColor:[
               'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)'

            ],
            borderColor:[
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'

            ],
            borderWidth:1
        }]
    },
    options:{
        plugins:{
            title:{
                display:true,
                text:'Development Project Breakdown'
            }
        }
    }
});

const analyticsCtx = document.getElementById('analyticsChart').getContext('2d');

new Chart(analyticsCtx,{
    type:'line',
    data:{
        labels:['January', 'February','March','April','May','June','July'],
        datasets:[{
            label:'Incidents',
            data:[40,78,68.78,77.08,48.6,57,48.45],
            borderColor:'rgba(75, 192, 192, 1)',
            backgroundColor:'rgba(75, 192, 192, 0.2)',
            fill:true,
            tension:0.3,
        
        }]
    },
    options:{
        plugins:{
            title:{
                display:true,
                text: 'Incident Reports Over This Year'
            }
        },
        scales:{
            y:{
                beginAtZero:true
            }
        }
    }
});

const threatCtx = document.getElementById('threatChart').getContext('2d');

new Chart(threatCtx,{

    type:'bar',
    data:{
        labels:['Critical','high','Medium','Low'],
        datasets:[{
            label:'Number of Threats',
            data:[3,7,12,20],
            backgroundColor:[
                'crimson',
                'orange',
                'gold',
                'green'

            ],
            borderColor:[
                 'darkred',
                'darkorange',
                'darkgoldenrod',
                'darkgreen'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:{
                beginAtZero:true,
                title:{
                    display:true,
                    text:'Number of threats'
                }
            }
        },
        plugins:{
            title:{
                display:true,
                text:'Threat serverity Breakdown'
            },
            legend:{
                display:true
            }

        }
    }


});