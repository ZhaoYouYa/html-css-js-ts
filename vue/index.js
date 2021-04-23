new Vue(
    {
        el: "#StockLocationView",

        methods:
        {
            radClick(value) {
                console.log(value)
            },
            query() {
                console.log("dsfgg")
                axios.get('http://localhost:64925/base_common/demo1/1')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
)