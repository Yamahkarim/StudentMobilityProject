d3.csv("YKBitaDataStudentMobilitySample500.csv").then(function(data) {
	console.log(data);

	var x_sc = data.map(i => i.SC)
	var y_er = data.map(i => i.ER) 
    var z_yr = data.map(i => i.YR)
	

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
	    z: z_yr,
		type: 'bar',
		label: 'Stacked Bar Dataset',
		
	  }];
	  
	  
	  Plotly.newPlot('myDiv', plot_data, {});
  });


/*
window.onload = function () {

	var chart = new CanvasJS.Chart("vis", {
		animationEnabled: true,
		title: {
			text: " Mobility of students within a school district in Hawaii"
		},
		axisX: {
			interval: 1,
			intervalType: "year",
			valueFormatString: "YYYY"
		},
		axisY: {
			suffix: "%"
		},
		toolTip: {
			shared: true
		},
		legend: {
			reversed: true,
			verticalAlign: "center",
			horizontalAlign: "right"
		},
		data: [{
			type: "stackedColumn100",
			name: "Real-Time",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2017, 0), y: 40 },
				{ x: new Date(2018, 0), y: 50 },
				{ x: new Date(2019, 0), y: 60 },

			]
		},
		{
			type: "stackedColumn100",
			name: "Web Browsing",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2017, 0), y: 28 },
				{ x: new Date(2018, 0), y: 18 },
				{ x: new Date(2019, 0), y: 12 },

			]
		},
		{
			type: "stackedColumn100",
			name: "File Sharing",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2017, 0), y: 15 },
				{ x: new Date(2018, 0), y: 12 },
				{ x: new Date(2019, 0), y: 10 },

			]
		},
		{
			type: "stackedColumn100",
			name: "Others",
			showInLegend: true,
			xValueFormatString: "YYYY",
			yValueFormatString: "#,##0\"%\"",
			dataPoints: [
				{ x: new Date(2017, 0), y: 17 },
				{ x: new Date(2018, 0), y: 20 },
				{ x: new Date(2019, 0), y: 18 },

			]
		}]
	});
	chart.render();
}
*/
