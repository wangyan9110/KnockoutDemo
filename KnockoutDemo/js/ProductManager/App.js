/**
 * Author: wangyan
 * Date: 13-9-21 下午8:55
 * Email: wangyan9110@gmail.com
 * Describe:define a namespace
 */

windows.productDemo={};

(function(productDemo){
    function App(){
        this.run=function(){
            var vm=new productDemo.ProductsViewModel();
            ko.applyBindings(vm);
        }
    }

    productDemo.App=App;
})(windows.productDemo);