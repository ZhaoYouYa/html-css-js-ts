var jv = new Vue(
    {
        el: "#StockLocationView",

        data:
        {
            startDate:"",
            endDate:"",
            WarehouseId:null,
            ErrMessage:"",
            IsFormtErr:false
        },
        methods:
        {
            radClick(value) {
                console.log(value)
            },
            query() {
              if(CheckStartDateIsLegal()&&CheckEndDateIsLegal())
              {
                GetStockByTimeAndWareHouseID()
              }
              


                // axios.get('http://localhost:64925/base_common/demo1/1')
                //     .then(function (response) {
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
            }
        }
    }
)

function CheckStartDateIsLegal() {
    console.log(jv.startDate)
    return true
}
function CheckEndDateIsLegal() {
    console.log(jv.endDate)
    return true
}
function GetStockByTimeAndWareHouseID() {
    //∑¢ÀÕhttp«Î«Û
}