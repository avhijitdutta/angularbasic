(function () {
    'use strict';

    angular.module(DEMO_APP)
        .controller('addEditController', addEditController);

    addEditController.$inject = ['$scope', '$timeout', 'formService'];
    function addEditController($scope, $timeout, formService){
        var ctrl = this;
        ctrl.message = "";
        ctrl.memberForm =  formService.init();
        
        ctrl.memberFormSubmit = function(memberForm){
            if(memberForm && validateForm(memberForm)){
                ctrl.memberList = formService.addData(ctrl.isEdit, memberForm);
                ctrl.memberForm =  formService.init();
                if(ctrl.isEdit){
                    ctrl.message = "Successfully updated";
                    ctrl.isEdit = false;
                }else{
                    ctrl.message = "Successfully added";
                }
                dismissMsg();
            }else{
                alert("Please add Name and Gender.");
            }
        };

        ctrl.editRow = function(index, obj){
            ctrl.isEdit = true;
            ctrl.memberForm = angular.copy(obj);
        }

        ctrl.deleteRow = function(index){
            ctrl.memberList = formService.deleteRow(index);
            ctrl.message = "Successfully deleted";
            dismissMsg();
        }

        function validateForm(formObj){
            if(!formObj.name || !formObj.gender){
                return false;
            }else{
                return true;
            }
        }

        function dismissMsg(){
            $timeout(function(){
                ctrl.message = "";
            },3000);
        }
    }

})();