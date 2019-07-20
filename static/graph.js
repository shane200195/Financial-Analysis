function create_bar_graph(graph_type, graph_x_labels, graph_data, graph_y_label){
    $('#myChart').remove();
    $('.graph-container').append('<canvas id="myChart" width="400" height="200"></canvas>');
    var ctx = document.querySelector('#myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: graph_type,
        data: {
            labels: graph_x_labels,
            datasets: [{
                label: graph_y_label,
                data: graph_data,
                borderColor: 'rgb(0,0,0)',
                pointRadius: 0.5

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        },
    });
}