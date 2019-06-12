var chart = AmCharts.makeChart("chartdiv", {
  "type": "stock",
  "theme": "light",
  "dataSets": [{
    "fieldMappings": [{
      "fromField": "sistemico",
      "toField": "sistemico"
    },{
      "fromField": "integrado",
      "toField": "integrado"
    }],
	"graphs": [{
		"title"   : "Column graph",
	}],
    "dataProvider": [{
		"date":new Date("2016-10-25"),
		"sistemico":2,
		"integrado":0
		},{
		"date":new Date("2016-10-26"),
		"sistemico":2,
		"integrado":0
		},{
		"date":new Date("2016-10-27"),
		"sistemico":2,
		"integrado":1
		},{
		"date":new Date("2016-10-28"),
		"sistemico":0,
		"integrado":3
		},{
		"date":new Date("2016-10-29"),
		"sistemico":3,
		"integrado":1
		},{
		"date":new Date("2016-10-31"),
		"sistemico":2,
		"integrado":2
		},{
		"date":new Date("2016-11-01"),
		"sistemico":2,
		"integrado":2
		},{
		"date":new Date("2016-11-03"),
		"sistemico":1,
		"integrado":3
		},{
		"date":new Date("2016-11-04"),
		"sistemico":0,
		"integrado":1
		},{
		"date":new Date("2016-11-07"),
		"sistemico":0,
		"integrado":1
		},{
		"date":new Date("2016-11-08"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2016-11-09"),
		"sistemico":1,
		"integrado":1
		},{
		"date":new Date("2016-11-10"),
		"sistemico":1,
		"integrado":1
		},{
		"date":new Date("2016-11-11"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2016-11-17"),
		"sistemico":2,
		"integrado":1
		},{
		"date":new Date("2016-11-18"),
		"sistemico":0,
		"integrado":1
		},{
		"date":new Date("2016-11-23"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2016-12-26"),
		"sistemico":2,
		"integrado":1
		},{
		"date":new Date("2016-12-27"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2016-12-28"),
		"sistemico":2,
		"integrado":0
		},{
		"date":new Date("2016-12-29"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2017-01-09"),
		"sistemico":0,
		"integrado":1
		},{
		"date":new Date("2017-01-16"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2017-01-18"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2017-01-19"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2017-01-23"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2017-01-26"),
		"sistemico":1,
		"integrado":1
		},{
		"date":new Date("2017-01-27"),
		"sistemico":1,
		"integrado":0
		},{
		"date":new Date("2017-02-01"),
		"sistemico":2,
		"integrado":2
		}],
    "categoryField": "date"
  }],
  "panels": [{
      "showCategoryAxis": true,
	  "title": "Legenda",
      "percentHeight": 100,
      "stockGraphs": [{
		"title": "Sistêmico",
        "valueField": "sistemico",
		"lineThickness": 2,
		"bullet": "round",
		"periodValue":"Sum",
		"useDataSetColors":false,
		"lineColorField": "#00BBD6"
      },{
		"title": "Integrado",
        "valueField": "integrado",
		"lineThickness": 2,
		"bullet": "round",
		"periodValue":"Sum",
		"useDataSetColors":false,
		"lineColor": "#EF3C79"
      }],
      "stockLegend": {
		"periodValueTextRegular": "[[valueField]]"
      }
    }],
  "categoryAxesSettings": {
    "maxSeries": 1,
    "groupToPeriods": ["WW"]
  },

  "chartScrollbarSettings": {
    "graph": "g1"
  },
	"export": {
		"enabled": true
	},
  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5
  },
  "language":"pt"
});

function setGrouping(groupTo, button) {
  // set chart grouping
  chart.categoryAxesSettings.groupToPeriods = [groupTo];
  chart.validateData();

  // set selected style on the button
  var buttons = button.parentNode.getElementsByTagName("input");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
  }
  button.className = "selected";
}
