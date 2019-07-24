/*function graphing_lines(graph_x_labels , data){
	var y = 0;
	var y_cor = [];
	var x_cor = [];

	//var current_slope = data[y][0];
	//var current_y_int = data[y][1];
	for (i=0; i < graph_x_labels.length; i++){
		if (i%25 == 0){
			current_slope = data[y][0];
			current_y_int = data[y][1];
			y_cor.push(null)

			if(y > data.length){
				continue;
			}else{
				y += 1
			}
		}else{
			y_cor.push(i*current_slope + current_y_int)
		}

	}

	return {
                label: "Stock Price",
                data: y_cor,
                borderColor: 'rgb(255,0,0)',
                pointRadius: 2
    		}
}*/

function y_cor_generator(graph_x_labels , data, length_per_regression){
	var y = 0;
	var y_cor = [];
	for (i=0; i < graph_x_labels.length; i++){
		if (i%length_per_regression == 0){
			current_slope = data[y][0];
			current_y_int = data[y][1];
			if(y > data.length){
				continue;
			}else{
				y += 1
			}
		}
		y_cor.push(i*current_slope + current_y_int)

	}

	/*return {
                label: "Stock Price",
                data: y_cor,
                borderColor: 'rgb(255,0,0)',
                pointRadius: 2
    		}*/
    return y_cor
}

function create_line(y_cor, graph_x_labels, graph_y_label, graph_data, length_per_regression){
	x_set_length = graph_x_labels.length
	number_of_lines = x_set_length/length_per_regression
	var calculated_lines = [{
                label: graph_y_label,
                data: graph_data,
                borderColor: 'rgb(0,0,0)',
                pointRadius: 0.5

            }]
	for (i=0; i<number_of_lines; i++){
		var current_y_cor = new Array(x_set_length)
		for(y=i*length_per_regression; y<(i+1)*length_per_regression; y++){
			current_y_cor[y] = y_cor[y]
		}
		calculated_lines.push({
                label: false,
                data: current_y_cor,
                fill: false,
                borderColor: 'rgb(255,0,0)',
                pointRadius: 0.5
            })
	}
	return calculated_lines
}