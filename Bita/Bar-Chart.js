d3.csv("YKBitaDataStudentMobilitySample500.csv").then(function(data) {
	console.log(data);

	var x_sc = data.map(i => i.SC)
	var y_er = data.map(i => i.ER) 
    // var z_yr = data.map(i => i.YR)
	

	// var StackedChart = new Plot(ctx, {
	// 	type: 'Stacked bar',
	// 	data: {
	// 		datasets: [{
	// 			label: 'Stacked Bar Dataset',
	// 			data: [{
	// 				x: x_sc,
   	// 	            y: y_er,
	// 			}, {
	// 				x: 0,
	// 				y: 10
	// 			}, {
	// 				x: 10,
	// 				y: 5
	// 			}]
	// 		}]
	// 	},
	// 	options: {
	// 		scales: {
	// 			xAxes: [{
	// 				type: 'linear',
	// 				position: 'bottom'
	// 			}]
	// 		}
	// 	}
	// });
    
	var plot_data = [{
		x: x_sc,
		y: y_er,
		// options = {
		// 	scales: {
		// 	  yAxes: [{
		// 		scaleLabel: {
		// 		  display: true,
		// 		  labelString: 'probability'
		// 		}
		// 	  }]
		// 	}     
		//   }
	    // z: z_yr,
		type: 'bar',
		label: 'Stacked Bar Dataset',
		
	  }];
	  
	  
	  Plotly.newPlot('myDiv', plot_data, {});
  });



