<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RecommendingCustomMngView.aspx.cs"
    Inherits="Com.Boshangyun.B9Client.Modules.Sale.Views.RecommendingToReward.RecommendingCustomMngView" %>

    <!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">

    <head runat="server">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>推荐客户管理</title>
        <!-- #include file="/css/public-css.html" -->
    </head>

    <body>
        <div id="Root">
            <div id="ManageView_" v-show="ViewPage=='ManageView'" class="page-root">
                <div class="menu_content">
                    <input type="button" class="menu_button menu_button_refresh" value="刷新"
                        v-on:click="BtnRefreshClicked" />
                    <input type="button" class="menu_button menu_button_basket_remove" value="导出"
                        v-on:click="BtnDeriveClicked">
                </div>
                <div class="page-content" style="margin: 15px;">
                    <table class="formtable">
                        <tr>
                            <td class="labelitem">活动名称</td>
                            <td class="input-container">
                                <input type="text" class="InputStyle" />
                                <input type="text" value="" style="display: none;">
                                <i class="clearValue"></i>
                                <input type="button" class="abs-clickBtn" value="..." />
                            </td>
                            <td class="labelitem">开始时间</td>
                            <td class="input-container">
                                <input id="StartTime" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">结束时间</td>
                            <td class="input-container">
                                <input id="EndTime" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td>
                                <input id="Query" type="button" value="查询" class="ButtonEx-26 btn-save"
                                    v-on:click="BtnQueryClicked" />
                            </td>
                        </tr>
                        <tr>
                            <td class="labelitem">活动状态</td>
                            <td colspan="2">
                                <div class="radios">
                                    <label>
                                        <input v-model="ShowStyle" name="StyleGroup" type="radio" value="graph"
                                            checked />图形
                                    </label>
                                    <label>
                                        <input v-model="ShowStyle" name="StyleGroup" type="radio" value="table" />表格
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div id="DataShowPart">
                        <div id="GraphStyle" v-show="ShowStyle=='graph'">
                            <div id="CustomerNumber" style="display: inline-block;width: 45%;height: 500px;"
                                v-on:click="CNClickTurnToTable"></div>
                            <div id="CustomerType" style="display: inline-block;width: 45%;height: 500px;"
                                v-on:click="CTClickTurnToDetail">
                            </div>
                        </div>

                        <div id="TableStyle" v-on:show="ShowStyle=='graph'"></div>
                    </div>
                </div>
            </div>


            <div id="DetailView_" v-show="ViewPage=='DetailView'" class="page-root">
                <div class="menu_content">
                    <input type="button" class="menu_button menu_button_return" value="返回"
                        v-on:click="BtnReturnClicked" />
                    <input type="button" class="menu_button menu_button_basket_remove" value="导出"
                        v-on:click="BtnDetailDeriveClicked">
                </div>
                <div class="page-content" style="margin: 15px;">
                    <table class="formtable">
                        <tr>
                            <td class="labelitem">活动名称</td>
                            <td class="input-container">
                                <input type="text" class="InputStyle" />
                                <input type="text" value="" style="display: none;">
                                <i class="clearValue"></i>
                                <input type="button" class="abs-clickBtn" value="..." />
                            </td>
                            <td class="labelitem">渠道应用来源</td>
                            <td class="input-container">
                                <input id="CustomerFromComb_" type="text" class="InputStyle"
                                    style="padding-left: 2px;" />
                            </td>
                            <td>
                                <input id="Query1" type="button" value="查询" class="ButtonEx-26 btn-save"
                                    v-on:click="BtnDetailQueryClicked" />
                            </td>
                        </tr>
                        <tr>
                            <td class="labelitem">会员类型</td>
                            <td colspan="3">
                                <div class="radios">
                                    <label>
                                        <input v-model="CustomerType" name="TypeGroup" type="radio" value="all"
                                            checked />全部
                                    </label>
                                    <label>
                                        <input v-model="CustomerType" name="TypeGroup" type="radio" value="会员" />会员
                                    </label>
                                    <label>
                                        <input v-model="CustomerType" name="TypeGroup" type="radio" value="非会员" />非会员
                                    </label>
                                </div>
                            </td>
                        </tr>

                    </table>

                    <div style="width: 700px;height: 600px;"></div>
                </div>


            </div>
        </div>
    </body>

    </html>
    <!-- #include file="/js/public-js.html" -->
    <script type="text/javascript" src="/Js/RefControls/Vue/vue.js"></script>
    <script type="text/javascript" src="/Js/RefControls/echarts.js"></script>
    <script type="text/javascript" src="RecommendingCustomMngView.js"></script>