function create_bar_graph(graph_type, graph_x_labels, graph_data, graph_y_label, regression_data){
    $('#myChart').remove();
    $('.graph-container').append('<canvas id="myChart" width="400" height="200"></canvas>');
    var ctx = document.querySelector('#myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: graph_type,
        data: {
            labels: graph_x_labels,
            datasets: create_line(y_cor_generator(graph_x_labels , regression_data), graph_x_labels, graph_y_label, graph_data)
        },
        options: {
            legend:{
                display: false
            },
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