<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <panel-group :panel-group-data="panelGroupData" @queryData="queryData" />
      <el-row
        style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px"
      >
        <line-chart :chart-data="lineChartData" />
      </el-row>
    </div>
  </div>
</template>

<script>
import { getAffiliationCharData } from "@/api/operation/statistics";
/*import PanelGroup from './dashboard/PanelGroup'
import LineChart from './dashboard/LineChart'*/
const lineChartData = {
  newVisitis: {
    name: "参与人数",
    expectedData: [0, 0, 0, 0, 0, 0, 0],
    actualData: [0, 0, 0, 0, 0, 0, 0],
    xDate: [],
  },
};
export default {
  name: "Dashboard",
  components: {
    PanelGroup,
    LineChart,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      panelGroupData: {
        registerNum: 0,
        checkNum: 0,
        checkAddNum: 0,
        interveneNum: 0,
        dayRate: 0,
        produceIncome: 0,
      },
    };
  },
  created() {
    // this.getAffiliationCharData('', '')
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
    queryData(affiliationId, date) {
      this.getAffiliationCharData(affiliationId, date);
    },
    getAffiliationCharData(affiliationId, date) {
      getAffiliationCharData(affiliationId, date).then((res) => {
        const rate =
          res.registerNum === 0
            ? 0
            : parseFloat(
                (res.interveneNum / res.registerNum) * 1.0 * 100,
              ).toFixed(2);
        res.dayRate = rate;
        this.panelGroupData = res;
        const _lineChartData = {};
        _lineChartData.name = "参与人数";
        _lineChartData.expectedData = res.rates;
        _lineChartData.actualData = res.joins;
        _lineChartData.actualDataMax = Math.max.apply(null, res.joins);
        _lineChartData.xDate = res.day;
        this.lineChartData = _lineChartData;
        console.log(Math.max.apply(null, res.joins));
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.date {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
