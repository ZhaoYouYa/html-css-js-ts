<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RecommendingManageView.aspx.cs"
    Inherits="Com.Boshangyun.B9Client.Modules.Sale.Views.RecommendingToReward.RecommendingManage" %>

    <!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">

    <head runat="server">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>推荐有奖管理</title>
        <!-- #include file="/css/public-css.html" -->
        <style>
            .DisableShow {
                display: none;
            }
        </style>
    </head>

    <body>
        <div id="RecommendRewardRoot">
            <div id="ManageView" v-show="ViewPage=='Manage'" class="page-root">
                <div class="menu_content">
                    <input type="button" class="menu_button menu_button_refresh" value="刷新"
                        v-on:click="BtnRefreshClicked" />
                    <input type="button" class="menu_button menu_button_add" value="添加" v-on:click="BtnAddClicked" />
                </div>
                <div class="page-content" style="margin: 15px;">
                    <table class="formtable">
                        <tr>
                            <td class="labelitem">活动名称</td>
                            <td class="input-container">
                                <input id="M_PatternName" type="text" class="InputStyle" v-model="PaternName"
                                    style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">开始时间</td>
                            <td class="input-container">
                                <input id="M_StartTime" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">结束时间</td>
                            <td>
                                <input id="M_EndTime" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td>
                                <input id="Query" type="button" value="查询" class="ButtonEx-26 btn-save"
                                    v-on:click="BtnQueryClicked" />
                            </td>
                        </tr>
                        <tr>
                            <td class="labelitem">活动状态</td>
                            <td colspan="8">
                                <div class="radios">
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="all"
                                            checked="checked" />全部
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="活动中" />活动中
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="未开始" />未开始
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="待审核" />待审核
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="保存" />保存
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="暂停" />暂停
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="结束" />结束
                                    </label>
                                    <label>
                                        <input v-model="PatternState" name="PatternGroup" type="radio" value="取消" />取消
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="iggrid-container">
                        <table id="PatterList"></table>
                    </div>
                </div>
            </div>
            <div id="AddOrEditView" v-show="ViewPage=='AddOrEdit'" class="page-root">
                <div class="menu_content">
                    <input type="button" class="menu_button menu_button_return" value="返回"
                        v-on:click="BtnReturnManageViewClicked" />
                    <input type="button" class="menu_button menu_button_save" value="保存" v-on:click="BtnSaveClicked" />
                    <input type="button" class="menu_button menu_button_basket_remove" value="提交"
                        v-on:click="BtnCommitClicked" />
                    <input type="button" class="menu_button menu_button_approve" value="审核"
                        v-on:click="BtnReviewClicked" />
                </div>
                <div class="page-content" style="margin: 15px;">
                    <table class="formtable">
                        <tr>
                            <td class="labelitem">活动名称</td>
                            <td class="input-container">
                                <input id="A_PatternName" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">开始时间</td>
                            <td class="input-container">
                                <input id="A_StartTime" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">结束时间</td>
                            <td class="input-container">
                                <input id="A_EndTime" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                        </tr>
                        <tr>
                            <td class="labelitem">目标客户</td>
                            <td class="input-container">
                                <input id="CustomTypeComb" type="text" class="InputStyle" style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">渠道应用</td>
                            <td class="input-container">
                                <input id="PartternPathComb" type="text" class="InputStyle"
                                    style="padding-left: 2px;" />
                            </td>
                            <td class="labelitem">推荐人数</td>
                            <td class="input-container">
                                <input id="RecommendNumber" type="number" class="InputStyle" min="1"
                                    style="padding-left: 2px;" />
                            </td>
                        </tr>
                    </table>
                    <div id="SetDetail" style="margin: 15px;">
                        <div style="margin-top: 10px;">
                            <div id="RewardSet" style="margin: 5px;">
                                <div style="display: inline-block;vertical-align: top;">
                                    <p style="margin-top: 10px;">
                                        <label>奖赠设置</label>
                                    </p>
                                </div>
                                <div style="display: inline-block;">
                                    <table class="formtable">
                                        <tr>
                                            <td>
                                                <input type="checkbox" id="FRR_CB" checked
                                                    v-on:click="RegistedCBChanged" />
                                                <label for="FRR_CB"
                                                    style="padding: auto; width: 80%;text-align: center;">好友成功注册为</label>
                                            </td>
                                            <div class="RegistClickedControl">
                                                <td style="padding-left: 1%;" class="RegistClickedControl">
                                                    <input id="RegistedBecomeTypeComb" type="text" />
                                                </td>
                                                <td style="padding-left: 1%;" class="RegistClickedControl">
                                                    <label style="text-align: center;width: 100%;">推荐人可获得</label>
                                                </td>
                                                <td style="padding-left: 1%;" class="RegistClickedControl">
                                                    <input id="RegistedRewardTypeComb" type="text" />
                                                </td>
                                                <td style="padding-left: 1%;" class="RegistClickedControl">
                                                    <div v-show="RegistedSelected=='现金'">
                                                        <input type="number" class="InputStyle" style="width: 80%;"
                                                            min="1" />
                                                        <label
                                                            style="text-align: left;width: 10%;height:30px;line-height: 30px;">元</label>
                                                    </div>
                                                    <div v-show="RegistedSelected=='代金券'">
                                                        <input type="text" id="ddlSupplier" class="InputStyle" />
                                                        <input type="text" id="ddlSupplierId" value=""
                                                            style="display: none;" />
                                                        <i id="ddlSupplierClear" class="clearValue"></i>
                                                        <input id="btnSelectSupplier" type="button" class="abs-clickBtn"
                                                            value="..." />
                                                    </div>
                                                </td>
                                                <td class="RegistClickedControl">
                                                    <label style="background-color: gold;">好友得到赠品</label>
                                                </td>
                                                <td class="RegistClickedControl">
                                                    <label>好友得到赠品todo</label>
                                                </td>
                                            </div>
                                            <td class="Blankstuff DisableShow" colspan="6"></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" id="FR1_CB" v-on:click="FirstDealCBChanged" />
                                                <label fro="FR1_CB"
                                                    style="padding: auto; width: 80%;text-align: center;">好友完成第一单</label>
                                            </td>
                                            <div class="FirstDealClickedControl DisableShow">
                                                <td style="padding-left: 1%;"
                                                    class="FirstDealClickedControl DisableShow">
                                                    <label></label>
                                                </td>
                                                <td style="padding-left: 1%;"
                                                    class="FirstDealClickedControl DisableShow">
                                                    <label style="text-align: center;width: 100%;">推荐人可获得</label>
                                                </td>
                                                <td style="padding-left: 1%;"
                                                    class="FirstDealClickedControl DisableShow">
                                                    <input id="FirstRewardTypeComb" type="text" class="InputStyle" />
                                                </td>
                                                <td style="padding-left: 1%;"
                                                    class="FirstDealClickedControl DisableShow">
                                                    <div v-show="FirstDealSelected=='现金'">
                                                        <input type="number" class="InputStyle" min="1"
                                                            style="width: 80%;" />
                                                        <label style="text-align: center;width: 10%;">元</label>
                                                    </div>
                                                    <div v-show="FirstDealSelected=='代金券'">
                                                        <input type="text" class="InputStyle" />
                                                        <input type="text" value="" style="display: none;" />
                                                        <i class="clearValue"></i>
                                                        <input type="button" class="abs-clickBtn" value="..." />

                                                    </div>
                                                </td>
                                                <td class="FirstDealClickedControl DisableShow">
                                                    <label>好友得到赠品</label>
                                                </td>
                                                <td class="FirstDealClickedControl DisableShow">
                                                    <label>好友得到赠品todo</label>
                                                </td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" id="FR2_CB" v-on:click="SecondDealCBChanged" />
                                                <label fro="FR2_CB"
                                                    style="padding: auto; width: 80%;text-align: center;">好友完成第二单</label>
                                            </td>
                                            <div class="SecondDealClickedControl DisableShow">
                                                <td style="padding-left: 1%;"
                                                    class="SecondDealClickedControl DisableShow">
                                                    <label></label>
                                                </td>
                                                <td style="padding-left: 1%;"
                                                    class="SecondDealClickedControl DisableShow">
                                                    <label style="text-align: center;width: 100%;">推荐人可获得</label>
                                                </td>
                                                <td style="padding-left: 1%;"
                                                    class="SecondDealClickedControl DisableShow">
                                                    <input id="SecondRewardTypeComb" type="text" class="InputStyle" />
                                                </td>
                                                <td style="padding-left: 1%;"
                                                    class="SecondDealClickedControl DisableShow">
                                                    <div v-show="SecondDealSelected=='现金'">
                                                        <input type="number" style="width: 80%;" class="InputStyle"
                                                            min="1" />
                                                        <label v-show="SecondDealSelected=='现金'"
                                                            style="text-align: center;width: 10%;">元</label>
                                                    </div>
                                                    <div v-show="SecondDealSelected=='代金券'">
                                                        <input type="text" class="InputStyle" />
                                                        <input type="text" value="" style="display: none;" />
                                                        <i class="clearValue"></i>
                                                        <input type="button" class="abs-clickBtn" value="..." />
                                                    </div>
                                                </td>
                                                <td class="SecondDealClickedControl DisableShow">
                                                    <label>好友得到赠品</label>
                                                </td>
                                                <td class="SecondDealClickedControl DisableShow">
                                                    <label>好友得到赠品todo</label>
                                                </td>
                                            </div>
                                        </tr>
                                        <tr
                                            v-show="RegistedSelected=='现金'||FirstDealSelected=='现金'|| SecondDealSelected=='现金'">
                                            <td colspan="2">
                                                <span>延迟</span>
                                                <input type="number" min="0" class="InputStyle" style="width: 50%;" value="0"/>
                                                <span style="width: auto;">天打款</span>
                                            </td>
                                        <td><span>*默认为0时即代表即时打款</span></td>
                                        </tr>
                                        <tr v-show="FirstDealChecked||SecondDealChecked">
                                            <td colspan="2">
                                                <input type="checkbox" id="IsCanRefund" />
                                                <span
                                                    style="padding: auto; width: 60%;text-align: left;">现金打款后不允许退货</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 10px;">
                            <div id="BroadcastSet" style="margin: 5px;">
                                <div style="display: inline-block;vertical-align: top;">
                                    <p style="margin-top: 10px;">
                                        <label>广播设置</label>
                                    </p>
                                </div>
                                <div style="display: inline-block;" class="BroadcastControl">
                                    <div class="radios BroadcastControl">
                                        <label class="BroadcastControl">
                                            <input v-model="BroadcastState" name="BroadGroup" type="radio"
                                                value="BroadRandom" checked="checked" />随广播
                                        </label>
                                        <label class="BroadcastControl">
                                            <input v-model="BroadcastState" name="BroadGroup" type="radio"
                                                value="BroadReal" />按实际情况广播
                                        </label>
                                    </div>
                                    <table class="formtable BroadcastControl">
                                        <tr
                                            v-show="RegistedSelected=='现金'||FirstDealSelected=='现金'|| SecondDealSelected=='现金'">
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%;">现金广播内容</label>
                                            </td>
                                            <td style="width: 60%;">
                                                <input id="MoneyBroadcastInput" type="text" class="InputStyle"
                                                    style="width: 100%;" value="尾号#手机尾号#的用户成功推荐1人，共获得#金额#元现金" />
                                            </td>
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%;cursor: pointer"
                                                    v-on:click="MoneyTelInsert"><span
                                                        style="color: blue;">#</span>手机尾号<span
                                                        style="color: blue;">#</span></label>
                                            </td>
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%;cursor: pointer"
                                                    v-on:click="MoneyMonInsert"><span
                                                        style="color: blue;">#</span>金额<span
                                                        style="color: blue;">#</span></label>
                                            </td>
                                        </tr>
                                        <tr
                                            v-show="RegistedSelected=='代金券'||FirstDealSelected=='代金券'|| SecondDealSelected=='代金券'">
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%;">赠券广播内容</label>
                                            </td>
                                            <td style="width: 60%;">
                                                <input id="TicketBroadcastInput" type="text" class="InputStyle"
                                                    style="width: 100%;" value="尾号#手机尾号#的用户成功推荐1人，共获得#代金券面额#元代金券" />
                                            </td>
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%; cursor: pointer;"
                                                    v-on:click="TicketTelInsert"><span
                                                        style="color: blue;">#</span>手机尾号<span
                                                        style="color: blue;">#</span></label>
                                            </td>
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%;cursor: pointer"
                                                    v-on:click="TicketCapInsert"><span
                                                        style="color: blue;">#</span>代金券面额<span
                                                        style="color: blue;">#</span></label>
                                            </td>
                                            <td style="width: 10%;">
                                                <label style="text-align: left; width: 100%;cursor: pointer"><span
                                                        style="color: blue;">#</span>商品名称<span
                                                        style="color: blue;">#</span></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td v-show="BroadcastState=='BroadRandom'" style="width: 10%;">
                                                <label style="text-align: left; width: 100%;">广播时间间隔</label>
                                            </td>
                                            <td v-show="BroadcastState=='BroadRandom'" style="width: 10%;">
                                                <input type="number" class="InputStyle" style="width: 20%;" min="1"
                                                    value="2">
                                                <label style="text-align: left; width: 75%;">秒</label>
                                            </td>
                                        </tr>

                                    </table>

                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 10px;">
                            <div id="HomePageWindow" style="margin: 5px;">
                                <div style="display: inline-block;vertical-align: top;">
                                    <p>
                                        <label>首页弹窗</label>
                                    </p>
                                </div>
                                <div style="display: inline-block;">
                                    <table id="首页弹窗">
                                        <tr>
                                            <td>
                                                <input type="checkbox" checked v-on:click="HomePageCBChanged" />
                                                <label>首页活动图片弹窗</label>
                                               
                                            </td>
                                            <td>
                                                <span>*选中后打开首页会弹窗该促销广告图片</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="HomePageIMGBtnControl">
                                                <input type="button" style="width: 75px;height: 75px;" />
                                            </td>
                                            <td><span>*建议上传200px*250px图片</span></td>
                                        </tr>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 10px;">
                            <div id="PatternRules" style="margin: 5px;">
                                <div style="display: inline-block;vertical-align: top;">
                                    <label>活动规则</label>
                                </div>
                                <div style="display: inline-block;">
                                    <textarea row="50" cols="70" style="height: 100px;"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div id="LookView" v-show="ViewPage=='Look'" class="page-root">
                <div class="menu_content">
                    <input type="button" class="menu_button menu_button_return" value="返回"
                        v-on:click="BtnReturnManageViewClicked" />
                </div>
                <div class="page-cotent"
                    style="margin: 15px;height:200px;width:98%;white-space: nowrap;height: 900px;overflow-y:scroll;">
                    <div id="RewardForRecommenter" style="width: 100%;height: 700px;">
                        <div
                            style="padding-top: 7px;background-color: #fafafa;height: 35px;border-style: solid;border-width: 1px;border-color:#eeee;">
                            <label style="font-size: 20px;align-items: center;">赠-推荐人</label>
                        </div>
                    </div>
                    <div id="RewardForFriend" style="width: 100%;height: 700px;">
                        <div
                            style="padding-top: 7px;background-color: #fafafa;height: 35px;border-style: solid;border-width: 1px;border-color:#eeee;">
                            <label style="font-size: 20px;align-items: center;">赠-好友</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    </html>
    <!-- #include file="/js/public-js.html" -->
    <script type="text/javascript" src="/Js/RefControls/Vue/vue.js"></script>
    <script type="text/javascript" src="RecommendingManageView.js"></script>