'use strict';

(function () {

    var employees = [
            {"id": 1, "firstName": "Srinivas", "lastName": "Balasubrmanayam", "managerId": 0, "managerName": "", "reports": 1, "title": "President and CEO", "department": "Corporate", "cellPhone": "903-000-0001", "officePhone": "080-420-0001", "email": "bsirinivas@prokarma.com", "city": "Hyderbad,TS", "pic": "james_king.jpg","cn":"Srinivas Balasubrmanayam"},
            {"id": 2, "firstName": "Mukundh", "lastName": "Balasubrmanayam", "managerId": 1, "managerName": "Srinivas Balasubrmanayam", "reports": 3, "title": "CTO", "department": "Marketing", "cellPhone": "903-000-0002", "officePhone": "080-420-0002", "email": "bmukundh@prokarma.com", "city": "Hyderbad,TS", "pic": "ray_moore.jpg","cn":"Mukundh Balasubrmanayam"},
            {"id": 3, "firstName": "Giri", "lastName": "Rajan", "managerId": 2, "managerName": "Mukundh Balasubrmanayam", "reports": 3, "title": "VP of Delivary", "department": "Engineering", "cellPhone": "903-000-0003", "officePhone": "080-420-0003", "email": "rgiri@prokarma.com", "city": "Hyderbad,TS", "pic": "eugene_lee.jpg","cn":"Giri Rajan" },
            {"id": 4, "firstName": "Anantha", "lastName": "Padmanadhan", "managerId": 2, "managerName": "Mukundh Balasubrmanayam", "reports": 0, "title": "VP of Maintance", "department": "IT/AdMIN", "cellPhone": "903-000-0004", "officePhone": "080-420-0004", "email": "panantha@prokarma.com", "city": "Hyderbad,TS", "pic": "john_williams.jpg","cn":"Anantha Padmanadhan"},
            {"id": 5, "firstName": "Shilpi", "lastName": "Panday", "managerId": 2, "managerName": "Mukundh Balasubrmanayam", "reports": 0, "title": "VP of HumanResouce", "department": "HR", "cellPhone": "903-000-0005", "officePhone": "080-420-0005", "email": "pshilpi@prokarma.com", "city": "Hyderbad,TS", "pic": "julie_taylor.jpg","cn":"Shilpi Panday"},
            {"id": 6, "firstName": "Prasanna", "lastName": "Das", "managerId": 3, "managerName": "Giri Rajan", "reports": 1, "title": "Director of Delivary", "department": "Engineering", "cellPhone": "903-000-0006", "officePhone": "080-420-0006", "email": "dprasanna@prokarma.com", "city": "Hyderbad,TS", "pic": "paul_jones.jpg","cn":"Prasanna Das"},
            {"id": 7, "firstName": "Sukant", "lastName": "Thiwary", "managerId": 3, "managerName": "Giri Rajan", "reports": 1, "title": "Delivary Manager", "department": "Engineering", "cellPhone": "903-000-0007", "officePhone": "080-420-0007", "email": "tsukanth@prokarma.com", "city": "Hyderbad,TS", "pic": "steven_wells.jpg","cn":"Sukant Thiwary"},
            {"id": 8, "firstName": "Aruna", "lastName": "Ramamurthi", "managerId": 3, "managerName": "Giri Rajan", "reports": 1, "title": "Delivary Manager", "department": "Marketing", "cellPhone": "903-000-0008", "officePhone": "080-420-0008", "email": "raruna@prokarma.com", "city": "Hyderbad,TS", "pic": "paula_gates.jpg","cn":"Arun Ramamurthi"},
            {"id": 9, "firstName": "Arun", "lastName": "Guruswamy", "managerId": 6, "managerName": "Prasanna Das", "reports": 1, "title": "Project Manager", "department": "Marketing", "cellPhone": "903-000-0009", "officePhone": "080-420-0009", "email": "garun@prokarma.com", "city": "Hyderbad,TS", "pic": "gary_donovan.jpg","cn":"Arun Guruswamy"},
            {"id": 10, "firstName": "Harish", "lastName": "Kavrui", "managerId": 9, "managerName": "Arun Guruswamy", "reports": 0, "title": "Softwre Engineer", "department": "Sales", "cellPhone": "903-000-0010", "officePhone": "080-420-0010", "email": "kharish@prokarma.com", "city": "Hyderbad,TS", "pic": "kathleen_byrne.jpg","cn":"Harish Kavuri"},
            {"id": 11, "firstName": "Pavani", "lastName": "Goud", "managerId": 8, "managerName": "Aruna Ramamurthi", "reports": 0, "title": "Softwre Engineer", "department": "Sales", "cellPhone": "903-000-0011", "officePhone": "080-420-0011", "email": "mpavani@prokarma.com", "city": "Hyderbad,TS", "pic": "amy_jones.jpg","cn":"Pavani Goud"},
            {"id": 12, "firstName": "Deepthi", "lastName": "Talluri", "managerId": 7, "managerName": "Sukant Thiwary", "reports": 0, "title": "Softwre Engineer", "department": "Engineering", "cellPhone": "903-000-0012", "officePhone": "781-000-0012", "email": "tdeepthi@prokarma.com", "city": "Hyderbad,TS", "pic": "lisa_wong.jpg","cn":"Deepthi Talluri"}
        ],

        findById = function (id) {
            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        return employees;
                    },
                    get: function (employee) {
                        return findById(parseInt(employee.employeeId));
                    }
                }

            }])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        return findByManager(parseInt(employee.employeeId));
                    }
                }

            }]);

}());