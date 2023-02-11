<template>
  <div class="graph-wrapper" id="graph">
    <div class="graph-block container">
      <figure class="highcharts-figure">
        <div id="container"></div>
      </figure>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import { mapGetters } from 'vuex';
export default {
  name: 'GraphComp',
  data() {
    return {
      chartOptions: {
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
              [0, '#201a37'],
              [1, '#42405a'],
            ],
          },
        },
        title: {
          text: 'График',
          style: {
            color: '#ffeed5',
            fontWeight: 'normal',
            fontSize: '20px',
            fontFamily: 'Open Sans',
          },
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          title: {
            x: -15,
            text: 'Попытка',
            style: {
              color: '#ffeed5',
              fontWeight: 'normal',
              fontSize: '13px',
              fontFamily: 'Open Sans',
            },
          },
          tickInterval: 1,
          labels: {
            style: {
              color: '#ffeed5',
            },
          },
          accessibility: {
            rangeDescription: 'Range: 0 to 10',
          },
        },

        yAxis: {
          title: {
            text: 'Шанс %',
            style: {
              color: '#ffeed5',
              fontWeight: 'normal',
              fontSize: '13px',
              fontFamily: 'Open Sans',
            },
          },
          minorTickInterval: 0.1,
          gridLineColor: '#ffeed55b',
          labels: {
            style: {
              color: '#ffeed5',
            },
          },
          accessibility: {
            rangeDescription: 'Range: 0 to 100',
          },
        },

        tooltip: {
          headerFormat: '<b>Данные о попытке усиления</b><br />',
          pointFormat: 'x = {point.x}, выпавший шанс {point.y}%',
        },

        series: [
          {
            data: [1, 2, 3],
            pointStart: 1,
          },
        ],
        plotOptions: {
          series: {
            color: '#8087e8',
            marker: {
              fillColor: '#8087e8',
              lineWidth: 2,
              lineColor: 1, // inherit from series
            },
            label: {
              connectorAllowed: false,
            },
            pointStart: 0,
          },
        },
      },
    };
  },
  components: {
    highcharts: Chart,
  },
  created() {
    this.chartOptions.series[0].data = this.getData;
  },
  mounted() {},
  computed: {
    ...mapGetters('graph', ['getData']),
  },
  watch: {
    getData() {
      this.chartOptions.series[0].data = this.getData;
    },
  },
  methods: {},
};
</script>

<style>
.graph-wrapper {
  background: #201d19;
}
.graph-block {
  padding-top: 50px;
  padding-bottom: 20px;
}

.highcharts-container {
  font-family: 'Open Sans', sans-serif;
}
.highcharts-figure,
.highcharts-data-table table {
  min-width: 360px;
  max-width: 800px;
  margin: 0 auto;
}

.highcharts-data-table table {
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>