/**
 * Author: wangyan
 * Date: 13-9-21 下午9:07
 * Email: wangyan9110@gmail.com
 * Describe:create a viewModel
 */

(function (productDemo) {

    var _self;

    function ProductsViewModel() {
        _self = this;

        //the selectedProduct
        _self.selectedProduct = ko.observable();

        _self.productCollection = ko.observableArray([]);

        _self.listViewSelectedItem=ko.observable(null);

        _self.listViewSelectedItem.subscribe(function(product){
            if(product){
                _self.selectedProduct(product);
            }
        });
    }

    /**
     * add new product
     */
    ProductsViewModel.prototype.addNewProduct = function () {
        var product = new productDemo.Product();

        _self.selectedProduct(product);
    }

    /**
     * done editing the product
     */
    ProductsViewModel.prototype.doneEditingProduct = function () {
        var p = _self.selectedProduct();

        if (!p) {
            return;
        }
        if (_self.productCollection.indexOf(p) > -1) {
            return;
        }

        _self.productCollection.push(p);

        _self.selectedProduct(null);

    }

    /**
     * remove the product
     * @returns {*}
     */
    ProductsViewModel.prototype.removeProduct = function () {
        var p = _self.selectedProduct();
        if (!p) {
            return;
        }
        _self.selectedProduct(null);
        return _self.productCollection.remove(p);
    }



    productDemo.ProductsViewModel = ProductsViewModel;

})(window.productDemo);