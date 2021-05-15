let _Vue = new Vue({
    el: "#Root",
    data:
    {
        ShowStyle: "graph",
        ViewPage: "ManageView",
        CustomerType:"all"

    },
    methods:
    {
        //#region BtnClicked
        BtnRefreshClicked() {

        },
        BtnDeriveClicked() {

        },
        BtnQueryClicked() {

        },
        BtnReturnClicked() {
            this.ViewPage = "ManageView"

        },
        BtnDetailDeriveClicked() {

        },
        BtnDetailQueryClicked()
        {

        },
        //#endregion

        CNClickTurnToTable()
        {
            this.ShowStyle="table"

        },
        CTClickTurnToDetail()
        {
            this.ViewPage="DetailView"

        }


    },
    mounted() 
    {
        //#region 日期组件初始化
        $("#StartTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false })
        $("#EndTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false })
        //#endregion

        $("#CustomerFromComb_").bsyCombo({
            showUnderLine: true,
            textKey: "CustomFromTypeName",
            cols: [{
                key: "CustomFromTypeName"
            }],
            primaryKey: "CustomFromTypeID"
        })
        let CustomTypes = [
            { CustomFromTypeID: 0, CustomFromTypeName: "全部" },
            { CustomFromTypeID: 1, CustomFromTypeName: "小程序" },
            { CustomFromTypeID: 2, CustomFromTypeName: "安卓" },
            { CustomFromTypeID: 3, CustomFromTypeName: "ios" }
        ]
        $("#CustomerFromComb_").bsyCombo("resetDataSource", CustomTypes)
        $("#CustomerFromComb_").bsyCombo("setSelectedItems", [{ index: 0 }])

        //#region 初始化Echarts
        let customerNumberChart = echarts.init(document.getElementById("CustomerNumber"))
        let customerTypeChart = echarts.init(document.getElementById("CustomerType"))

        let CNChartOptions = {
            title : {
                text:"客户总数"

            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br />{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'left',
                x: 'right',
                data: []
            },

            series: [

                {
                    name: '客户总数',
                    type: 'pie',
                    radius: '55%',
                    itemStyle: {
                        normal: {
                            // 定制显示（按顺序）
                            color: function (params) {
                                var colorList = ['#64c2fe', '#b19ef7', '#90f5d3', '#fbbeed', '#ffab60', '#9ff0fb', '#9dff71', '#fff38a', '#5380ef', '#fe7a84'];
                                return colorList[params.dataIndex]
                            }
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'outside'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    grid: {
                        left: '0',
                        right: '0',
                        bottom: '0',
                        containLabel: true
                    },
                    data: [
                        { value: 67, name: "推荐有奖BBB" },
                        { value: 87, name: "推荐有奖AAA" }
                    ]
                }
            ]
        }
        let CTChartOptions = {
            title : {
                text:"客户类型"

            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br />{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'left',
                x: 'right',
                data: []
            },

            series: [

                {
                    name: '客户总数',
                    type: 'pie',
                    radius: '55%',
                    itemStyle: {
                        normal: {
                            // 定制显示（按顺序）
                            color: function (params) {
                                var colorList = ['#64c2fe', '#b19ef7', '#90f5d3', '#fbbeed', '#ffab60', '#9ff0fb', '#9dff71', '#fff38a', '#5380ef', '#fe7a84'];
                                return colorList[params.dataIndex]
                            }
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'outside'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    grid: {
                        left: '0',
                        right: '0',
                        bottom: '0',
                        containLabel: true
                    },
                    data: [
                        { value: 67, name: "推荐有奖BBB会员" },
                        { value: 34, name: "推荐有奖BBB非会员" },
                        { value: 89, name: "推荐有奖AAA会员" },
                        { value: 97, name: "推荐有将AAA非会员" }
                    ]
                }
            ]

        }

        customerNumberChart.setOption(CNChartOptions)
        customerTypeChart.setOption(CTChartOptions)
        //#endregion

    
    
    }

})
