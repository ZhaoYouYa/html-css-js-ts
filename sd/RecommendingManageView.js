var _vue = new Vue(
    {
        el: "#RecommendRewardRoot",
        data:
        {
            ViewPage: "Manage",
            RegisterChecked: true,
            FirstDealChecked: false,
            SecondDealChecked: false,
            HomePageCBChecked: true,
            PatternState: "all",
            BroadcastState: "BroadRandom",
            RegistedSelected: "现金",
            FirstDealSelected: "现金",
            SecondDealSelected: "现金",
            PaternName: ""



        },
        methods:
        {
            //#region  BtnClicked
            //ManageView Btn
            BtnRefreshClicked() {

            },
            BtnAddClicked() {
                this.ViewPage = "AddOrEdit"

            },
            BtnQueryClicked() {

            },
            //AddOrEditView LookView Btn
            BtnReturnManageViewClicked() {
                this.ViewPage = "Manage"

            },
            BtnSaveClicked() {

            },
            BtnCommitClicked() {

            },
            BtnReviewClicked() {

            },
            //#endregion

            //#region CheckBoxClicked
            RegistedCBChanged() {
                this.RegisterChecked = !this.RegisterChecked

                if (this.RegisterChecked) {
                    $(".RegistClickedControl").removeClass("DisableShow")
                    $(".Blankstuff").addClass("DisableShow")

                }
                else {
                    $(".RegistClickedControl").addClass("DisableShow")
                    $(".Blankstuff").removeClass("DisableShow")

                }
                this.BroadCastPartShowOrHidden()
            },

            FirstDealCBChanged() {
                this.FirstDealChecked = !this.FirstDealChecked
                if (this.FirstDealChecked) {
                    $(".FirstDealClickedControl").removeClass("DisableShow")

                }
                else {
                    $(".FirstDealClickedControl").addClass("DisableShow")

                }
                this.BroadCastPartShowOrHidden()

            },
            SecondDealCBChanged() {
                this.SecondDealChecked = !this.SecondDealChecked
                if (this.SecondDealChecked) {
                    $(".SecondDealClickedControl").removeClass("DisableShow")

                }
                else {
                    $(".SecondDealClickedControl").addClass("DisableShow")

                }
                this.BroadCastPartShowOrHidden()

            },
            HomePageCBChanged() {
                //当同时绑定v-modol 和 v-on clicke 事件时，v-on click 先一步调用，v-model 后改变值
                this.HomePageCBChecked = !this.HomePageCBChecked
                if (!this.HomePageCBChecked) {
                    $(".HomePageIMGBtnControl").addClass("DisableShow")

                }
                else {
                    $(".HomePageIMGBtnControl").removeClass("DisableShow")

                }

            },

            BroadCastPartShowOrHidden() {
                if ((!this.RegisterChecked) && (!this.FirstDealChecked) && (!this.SecondDealChecked)) {
                    $(".BroadcastControl").addClass("DisableShow")
                }
                else {
                    $(".BroadcastControl").removeClass("DisableShow")
                }

            },
            //#endregion

            //#region 表格内操作事件

            View(data) {
                this.ViewPage = "Look"

            },

            Edit(data) {
                console.log("2")

            },
            Pause(data) {

            },
            Cancle(data) {

            },
            Review(data) {

            },
            Start(data) {

            },
            Delete(data) {

            },
            //#endregion 

            //#region  广播设置内容插入
            MoneyTelInsert() {
                this.MoneyRewardInputInsert("#手机尾号#")
            },
            MoneyMonInsert() {
                this.MoneyRewardInputInsert("#金额#")

            },
            TicketTelInsert() {
                this.TicketRewardInputInsert("#手机尾号#")

            },
            TicketCapInsert() {
                this.TicketRewardInputInsert("#代金券面额#")

            },
            MoneyRewardInputInsert(insertStr) {
                let Input_ = document.getElementById("MoneyBroadcastInput")
                let startPos = Input_.selectionStart
                let endPos = Input_.selectionEnd
                if(startPos==undefined || endPos==undefined) return
                let text = Input_.value
                let newText = text.substring(0,startPos) + insertStr +text.substring(endPos)

                Input_.value = newText
                Input_.focus()
                Input_.selectionStart = startPos+insertStr.length
                Input_.selectionEnd = endPos+insertStr.length
            },
            TicketRewardInputInsert(insertStr) {
                
                let Input_ = document.getElementById("TicketBroadcastInput")
                let startPos = Input_.selectionStart
                let endPos = Input_.selectionEnd
                if(startPos==undefined || endPos==undefined) return
                let text = Input_.value
                let newText = text.substring(0,startPos) + insertStr +text.substring(endPos)

                Input_.value = newText
                Input_.focus()
                Input_.selectionStart = startPos+insertStr.length
                Input_.selectionEnd = endPos+insertStr.length
            }


            //#endregion
        },

        mounted() {

            var thisVue = this//这个可以避免在bsy组件中，vue中绑定变量不生效的bug
            //#region  组件初始化
            //日期组件初始化
            $("#M_StartTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false });
            $("#M_EndTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false });
            $("#A_StartTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false });
            $("#A_EndTime").datetimepicker({ lang: 'ch', timepicker: true, format: 'Y-m-d H:i', step: 5, closeOnDateSelect: false });

            //#region 下拉框组件初始化
            $("#CustomTypeComb").bsyCombo({
                showUnderLine: false,
                textKey: "CustomTypeName",
                cols: [{
                    key: "CustomTypeName"
                }],
                primaryKey: "CustomTypeID"
            })
            let CustomTypes = [
                { CustomTypeID: 0, CustomTypeName: "所有客户" },
                { CustomTypeID: 1, CustomTypeName: "会员" },
                { CustomTypeID: 2, CustomTypeName: "非会员" },
                { CustomTypeID: 3, CustomTypeName: "营销列表" }
            ]
            $("#CustomTypeComb").bsyCombo("resetDataSource", CustomTypes)
            $("#CustomTypeComb").bsyCombo("setSelectedItems", [{ index: 0 }])


            $("#PartternPathComb").bsyCombo({
                showUnderLine: true,
                textKey: "PartternPathName",
                mutiSelect: true,
                cols: [{
                    key: "PartternPathName"
                }],
                primaryKey: "PartternPathID"
            })
            let PartternPaths =
                [
                    { PartternPathID: 0, PartternPathName: "小程序" },
                    { PartternPathID: 1, PartternPathName: "APP" }
                ]
            $("#PartternPathComb").bsyCombo("resetDataSource", PartternPaths)
            $("#PartternPathComb").bsyCombo("setSelectedItems", [{ index: 0 }])

            $("#RegistedBecomeTypeComb").bsyCombo({
                showUnderLine: false,
                textKey: "RegistedTypeName",
                cols: [{
                    key: "RegistedTypeName"
                }],
                primaryKey: "RegistedTypeID",


            })

            let RegistedTypes =
                [
                    { RegistedTypeID: 0, RegistedTypeName: "会员" },
                    { RegistedTypeID: 1, RegistedTypeName: "客户" }
                ]

            $("#RegistedBecomeTypeComb").bsyCombo("resetDataSource", RegistedTypes)
            $("#RegistedBecomeTypeComb").bsyCombo("setSelectedItems", [{ index: 0 }])


            $("#FirstRewardTypeComb").bsyCombo({
                showUnderLine: false,
                textKey: "RewardTypeName",
                cols: [{
                    key: "RewardTypeName"
                }],
                primaryKey: "RewardTypeID",
                selectionChanged: function (items) {
                    thisVue.FirstDealSelected = $("#FirstRewardTypeComb").bsyCombo("getSelectedItems")[0].RewardTypeName
                }
            })
            let RewardTypes =
                [
                    { RewardTypeID: 0, RewardTypeName: "现金" },
                    { RewardTypeID: 1, RewardTypeName: "代金券" }
                ]
            $("#FirstRewardTypeComb").bsyCombo("resetDataSource", RewardTypes)
            $("#FirstRewardTypeComb").bsyCombo("setSelectedItems", [{ index: 0 }])


            $("#RegistedRewardTypeComb").bsyCombo({
                showUnderLine: false,
                textKey: "RewardTypeName",
                cols: [{
                    key: "RewardTypeName"
                }],
                primaryKey: "RewardTypeID",
                selectionChanged: function (items) {
                    thisVue.RegistedSelected = $("#RegistedRewardTypeComb").bsyCombo("getSelectedItems")[0].RewardTypeName
                }
            })
            $("#RegistedRewardTypeComb").bsyCombo("resetDataSource", RewardTypes)
            $("#RegistedRewardTypeComb").bsyCombo("setSelectedItems", [{ index: 0 }])

            $("#SecondRewardTypeComb").bsyCombo({
                showUnderLine: false,
                textKey: "RewardTypeName",
                cols: [{
                    key: "RewardTypeName"
                }],
                primaryKey: "RewardTypeID",
                selectionChanged: function (items) {
                    thisVue.SecondDealSelected = $("#SecondRewardTypeComb").bsyCombo("getSelectedItems")[0].RewardTypeName
                }
            })
            $("#SecondRewardTypeComb").bsyCombo("resetDataSource", RewardTypes)
            $("#SecondRewardTypeComb").bsyCombo("setSelectedItems", [{ index: 0 }])
            //#endregion
            //#region 表格初始化
            var gridColumns =
                [
                    { headerText: "活动名称", key: "d1", dataType: "string" },
                    { headerText: "活动状态", key: "d2", dataType: "string" },
                    { headerText: "渠道应用", key: "d3", dataType: "string" },
                    { headerText: "开始时间", key: "d4", dataType: "number" },
                    { headerText: "结束时间", key: "d5", dataType: "string", formatter: $.gridHelper.formatDate },
                    { headerText: "备注", key: "d6", dataType: "string" },
                    { headerText: "启用", key: "d7", dataType: "bool", format: "checkbox" },
                    { headerText: "操作", key: "d8", dataType: "string", unbound: true, formula: "SelectShow", width: 220 }
                ];

            var gridOptions =
            {
                width: "100%",
                height: "99%",
                primaryKey: "1",
                dataSource: [],
                responseDataKey: "DataList",
                columns: gridColumns,
                filtering: true,
                features:
                    [
                        {
                            name: "Paging",
                            type: "local",
                            pageSize: 10,
                            showPageSizeDropDown: false
                        },

                        {
                            name: "Resizing",
                            deferredResizing: false,
                            allowDoubleClickedToResize: true
                        },

                        {
                            name: "Selection",
                            mode: "row"
                        }

                    ]

            }

            $("#PatterList").igGrid(gridOptions)
            //#endregion 表格初始化
            //#endregion

            //#region Test 给表格加值
            let testValues =
                [
                    { d1: "sf", d2: "活动中", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: true },
                    { d1: "sf", d2: "未开始", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: false },
                    { d1: "sf", d2: "暂停", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: true },
                    { d1: "sf", d2: "待审核", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: true },
                    { d1: "sf", d2: "保存", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: true },
                    { d1: "sf", d2: "取消", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: true },
                    { d1: "sf", d2: "结束", d3: "1", d4: "34", d5: "3456x", d6: "表格", d7: true }
                ]

            $("#PatterList").igGrid("option", "dataSource", testValues)
            $("#PatterList").igGrid("dataBind")


            //#endregion 
        }

    })

function SelectShow(data) {
    let template = "<a href='###' class='grid-button' onclick=\"_vue.View('" + data.d1 + "')\">查看</a>"
    switch (data.d2) {
        case "活动中":
            {
                template = template + "<a href='###' class='grid-button' onclick=\"_vue.Edit('" + data.d1 + "')\">编辑</a>" +
                    "<a href='###' class='grid-button' onclick=\"_vue.Pause('" + data.d1 + "')\">暂停</a>" +
                    "<a href='###' class='grid-button' onclick=\"_vue.Cancle('" + data.d1 + "')\">取消</a>"
                break
            }
        case "未开始":
            {
                template = template + "<a href='###' class='grid-button' onclick=\"_vue.Edit('" + data.d1 + "')\">编辑</a>" +
                    "<a href='###' class='grid-button' onclick=\"_vue.Cancle('" + data.d1 + "')\">取消</a>"
                break

            }
        case "暂停":
            {
                template = template + "<a href='###' class='grid-button' onclick=\"_vue.Edit('" + data.d1 + "')\">编辑</a>" +
                    "<a href='###' class='grid-button' onclick=\"_vue.Start('" + data.d1 + "')\">启用</a>"
                break

            }
        case "待审核":
            {
                template = template + "<a href='###' class='grid-button' onclick=\"_vue.Edit('" + data.d1 + "')\">编辑</a>" +
                    "<a href='###' class='grid-button' onclick=\"_vue.Review('" + data.d1 + "')\">审核</a>"
                break

            }
        case "保存":
            {
                template = template + "<a href='###' class='grid-button' onclick=\"Edit('" + data.d1 + "')\">编辑</a>" +
                    "<a href='###' class='grid-button' onclick=\"_vue.Delete('" + data.d1 + "')\">删除</a>"
                break
            }

        default:
            {

            }
    }
    return template

}

