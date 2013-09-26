Ext.define('FindACab.view.RatingChart', {
	extend: 'Ext.chart.SpaceFillingChart', //<1>
	xtype: 'ratingchart',
	requires: [ //<2>
		'Ext.chart.series.Gauge',
		'Ext.chart.series.sprite.PieSlice',
	],
	config: {
		series: [{
			type: 'gauge', //<3>
			field: 'avg_rating', //<4>
			labelField: 'Rating',
			value: 0,
			minimum: 0,
			maximum: 5,
			donut: 80,
			colors: ["#ffb13a", "lightgrey"]
		}]
	}
});