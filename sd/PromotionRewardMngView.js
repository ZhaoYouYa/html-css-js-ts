class ChartOptions {
    constructor() {
        this.title = {
            text: ""
        }
        this.tooltip = {
            trigger: 'item',
            formatter: "{a} <br />{b}: {c} ({d}%)"
        }
        this.legend = {
            orient: 'left',
            x: 'right',
            data: []
        }
        this.series = [

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
                }
            }
        ]

    }
}

let _Vue = new Vue({
    el: "#Root",
    data:
    {
        ShowStyle: "graph",
        ViewPage: "ManageView",
        CustomerType: "all"

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
        BtnDetailQueryClicked() {

        },
        //#endregion
        TurnToDetailPage() {
            this.ViewPage = "DetailView"
        }
    },
    mounted() {
        //#region 日期组件初始化
        $("#StartTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false })
        $("#EndTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false })
        //#endregion

        $("#RewardReasonComb").bsyCombo({
            showUnderLine: true,
            textKey: "ReasonTypeName",
            cols: [{
                key: "ReasonTypeName"
            }],
            primaryKey: "ReasonTypeID"
        })
        let CustomTypes = [
            { ReasonTypeID: 0, ReasonTypeName: "全部" },
            { ReasonTypeID: 1, ReasonTypeName: "完成注册" },
            { ReasonTypeID: 2, ReasonTypeName: "完成第一单" },
            { ReasonTypeID: 3, ReasonTypeName: "完成第二单" }
        ]
        $("#RewardReasonComb").bsyCombo("resetDataSource", CustomTypes)
        $("#RewardReasonComb").bsyCombo("setSelectedItems", [{ index: 0 }])

        //#region 初始化Echarts
        let RewardFromMoneyChart = echarts.init(document.getElementById("RewardFromMoney"))
        let RewardFromTicketChart = echarts.init(document.getElementById("RewardFromTicket"))
        let FreeTicketChart = echarts.init(document.getElementById("FreeTicket"))
        let HasUsedTicketChart = echarts.init(document.getElementById("HasUsedTicket"))



        let RewardFromMoneyOptions = new ChartOptions()
        let RewardFromTicketOptions = new ChartOptions()
        let FreeTicketOptions = new ChartOptions()
        let HasUsedTicketOptions = new ChartOptions()

        RewardFromMoneyOptions.title = {
            text: "奖励金额"
        }
        RewardFromTicketOptions.title = {
            text: "奖励代金券"
        }
        FreeTicketOptions.title = {
            text: "赠送代金券"
        }
        HasUsedTicketOptions.title = {
            text: "已使用代金券"
        }


        RewardFromMoneyOptions.series[0].name = "奖励金额"
        RewardFromMoneyOptions.series[0].data = [
            { value: 67, name: "推荐有奖BBB" },
            { value: 87, name: "推荐有奖AAA" }
        ]

        RewardFromTicketOptions.series[0].name = "奖励代金券"
        RewardFromTicketOptions.series[0].data = [
            { value: 20, name: "推荐有奖BBB 面额100元" },
            { value: 87, name: "推荐有奖AAA 面额100元" },
            { value: 67, name: "推荐有奖BBB 面额80元" },
            { value: 87, name: "推荐有奖AAA 面额80元" }
        ]

        FreeTicketOptions.series[0].name = "赠送代金券"
        FreeTicketOptions.series[0].data = [
            { value: 10, name: "推荐有奖BBB 面额100元" },
            { value: 87, name: "推荐有奖AAA 面额100元" },
            { value: 67, name: "推荐有奖BBB 面额80元" },
            { value: 87, name: "推荐有奖AAA 面额80元" }
        ]

        HasUsedTicketOptions.series[0].name = "已使用代金券"
        HasUsedTicketOptions.series[0].data = [
            { value: 30, name: "推荐有奖BBB 面额100元" },
            { value: 87, name: "推荐有奖AAA 面额100元" },
            { value: 67, name: "推荐有奖BBB 面额80元" },
            { value: 87, name: "推荐有奖AAA 面额80元" }
        ]


        RewardFromMoneyChart.setOption(RewardFromMoneyOptions)
        RewardFromTicketChart.setOption(RewardFromTicketOptions)
        FreeTicketChart.setOption(FreeTicketOptions)
        HasUsedTicketChart.setOption(HasUsedTicketOptions)
        //#endregion


    }
})