/**
 * Author: wangyan
 * Date: 13-9-21 下午8:57
 * Email: wangyan9110@gmail.com
 * Describe:create a product model
 */

(function (productDemo) {

    function Product() {
        var _self = this;

        _self.name = ko.observable("");

        _self.description = ko.observable("");

        _self.price =  ko.observable(0.00);

        _self.quantity = ko.observable(0);

        _self.cost = ko.computed(function () {
            return this.price() * this.quantity();
        }, this);
    }

    productDemo.Product = Product;

})(window.productDemo);
