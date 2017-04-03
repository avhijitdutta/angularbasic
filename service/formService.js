(function () {
    'use strict';
    angular.module(DEMO_APP)
        .service('formService', formService);

    function formService(){
        this.name =  "";
        this.gender = "";
        this.hobbies = [];
        this.id = "";

        this.memberList = [];

        this.init = init;
        this.addData = addData;
        this.deleteRow = deleteRow;

        function init(){
            this.name =  "";
            this.gender = "";
            this.hobbies = [];
            this.id = "";
        }
        
        function addData(isEdit, memberForm){
            if(isEdit){
                this.memberList.splice(parseInt(memberForm.id) -1 , 1, memberForm);
            }else{
                memberForm.id = this.memberList.length + 1;
                this.memberList.push(memberForm);
            }
            return this.memberList;
        }

        function deleteRow(index){
            this.memberList.splice(index, 1);
            return this.memberList;
        }

    }
})();