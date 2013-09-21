/**
 * Author: wangyan
 * Date: 13-9-21 下午8:57
 * Email: wangyan9110@gmail.com
 * Describe:create a product model
 */

(function (product) {

    function Product() {
        var _self = this;

        _self.name = ko.observable("");

        _self.description = ko.observale("");

        _self.price = ko.observale(0.00);

        _self.quantity = ko.observable(0);

        _self.cost = ko.observable(function () {
            return this.price() * this.quantity();
        }, this);
    }

    productDemo.Product = Product;

})(window.productDemo);
