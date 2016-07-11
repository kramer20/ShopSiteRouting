(function () {
	'use strict';
	angular
		.module('todos')
		 .factory('API', function() {

		 	var vm = this;

		 	// Save something to local storage
		 	function setStorage(data)
		 	{
		 		var data = JSON.stringify(data);
		 		//alert("SAVED");
		 		localStorage.setItem('data',data);
		 	}


		 	//get something from local storage

		 	function getStorage()
		 	{
		 		var data = localStorage.getItem('data');
		 		data = JSON.parse(data);
		 		return data;
		 	}

		 	return {
		 		setStorage,
		 		getStorage
		 	}
		 	

		 });
})();