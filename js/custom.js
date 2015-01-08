$(document).ready(function(){  


	/**
	 * Datepicker
	 * @type {[type]}
	 */
	$('.hasDatepicker').datepicker({
      autoclose: true
	});


	/**
	 * popover
	 * @type {String}
	 */
	$('.icon-info').popover({
		placement: "top",
		trigger: "hover"
	});    

	/**
	 * Creating different validators
	 * @return {[type]} [description]
	 */
	var validator1 = function(){
	  	$('form[name="frm_management"]').validate({
	        rules: {
				strHealthCareAdvisor: {
					required: true
				}, 
				strFirstName: {
					minlength: 2,
					required: true
				}, 
				strSurname: {
					minlength: 2,
					required: true
				}, 
				dob: {
					minlength: 2,
					required: true
				}, 
				strHomePhone: {
					minlength: 2,
					required: true
				}, 
				strEmail: { 
					email: true,
					required: true
				} 
	        },
	  		errorPlacement: function(error, element) {
		        error.appendTo(element.closest('.form-group'));
		    },
		    highlight: function(label) {
		    	$(label).closest('.form-group').addClass('has-error');
		    },
		    success: function(label) {
		    	label
		    		.text('OK!').addClass('valid')
		    		.closest('.form-group').addClass('has-success');
		    }
	    });
	};

	var validator2 = function(){
	  	$('form[name="frm_insurence"]').validate({
	        rules: {
				COVERAGE_TYPE: {
					required: true
				}, 
				COVERAGE_AMOUNT: {
					required: true
				}, 
				YEARS_DESIRED: {
					required: true
				}, 
				SMOKING_STATUS: {
					required: true
				}, 
				TITLE: {
					required: true
				}, 
				strFirstName: {
					minlength: 2,
					required: true
				}, 
				strSurname: {
					minlength: 2,
					required: true
				}, 
				GENDER_UK: {
					required: true
				}, 
				DOB_j: {
					required: true
				}, 
				DOB_m: {
					required: true
				}, 
				DOB_y: {
					required: true
				}, 
				PRI_PHONE: {
					minlength: 2,
					required: true
				}, 
				ADDRESS1: { 
					minlength: 2,
					required: true
				}, 
				EMAIL: { 
					email: true,
					required: true
				}, 
				CITY: { 
					minlength: 2,
					required: true
				}, 
				POSTCODE: {  
					minlength: 2,
					required: true
				} 
	        },
	  		errorPlacement: function(error, element) {
		        error.appendTo(element.closest('.form-group'));
		    },
		    highlight: function(label) {
		    	$(label).closest('.form-group').addClass('has-error');
		    },
		    success: function(label) {
		    	label
		    		.text('OK!').addClass('valid')
		    		.closest('.form-group').addClass('has-success');
		    }
	    });
	};
	var validator3 = function(){
	  	$('form[name="frm_debtadvice"]').validate({
	        rules: {
				DEBT_AMT: {
					required: true
				}, 
				MONTHLY_INCOME: {
					required: true,
					minlength: 2
				}, 
				MONTHLY_DISPOSABLE_INCOME: {
					required: true,
					minlength: 2
				}, 
				NUM_CREDITORS: {
					required: true
				}, 
				EMPLOYMENT_STATUS: {
					required: true
				}, 
				RESIDENTAL_STATUS: {
					required: true
				},  
				FNAME: {
					minlength: 2,
					required: true
				}, 
				LNAME: {
					minlength: 2,
					required: true
				}, 
				DOB_j: {
					required: true
				}, 
				DOB_m: {
					required: true
				}, 
				DOB_y: {
					required: true
				}, 
				ADDRESS1: { 
					minlength: 2,
					required: true
				}, 
				EMAIL: { 
					email: true,
					required: true
				}, 
				CITY: { 
					minlength: 2,
					required: true
				}, 
				PRI_PHON: { 
					minlength: 2,
					required: true
				}, 
				POSTCODE: {  
					minlength: 2,
					required: true
				} 
	        },
	  		errorPlacement: function(error, element) {
		        error.appendTo(element.closest('.form-group'));
		    },
		    highlight: function(label) {
		    	$(label).closest('.form-group').addClass('has-error');
		    },
		    success: function(label) {
		    	label
		    		.text('OK!').addClass('valid')
		    		.closest('.form-group').addClass('has-success');
		    }
	    });
	};

	var validator4 = function(){
	  	$('form[name="frm_remortgage"]').validate({
	        rules: {
				EST_VAL: {
					required: true
				}, 
				LOAN_VAL: {
					required: true
				}, 
				SELF_CERT: {
					required: true
				}, 
				OTHER_DEBT: {
					required: true
				}, 
				OCC_STAT: {
					required: true
				}, 
				FNAME: {
					minlength: 2,
					required: true
				}, 
				LNAME: {
					minlength: 2,
					required: true
				}, 
				DOB_j: {
					required: true
				}, 
				DOB_m: {
					required: true
				}, 
				DOB_y: {
					required: true
				}, 
				PRI_PHONE: {
					minlength: 2,
					required: true
				}, 
				ADDRESS1: { 
					minlength: 2,
					required: true
				}, 
				EMAIL: { 
					email: true,
					required: true
				}, 
				CITY: { 
					minlength: 2,
					required: true
				}, 
				POSTCODE: {  
					minlength: 2,
					required: true
				} 
	        },
	  		errorPlacement: function(error, element) {
		        error.appendTo(element.closest('.form-group'));
		    },
		    highlight: function(label) {
		    	$(label).closest('.form-group').addClass('has-error');
		    },
		    success: function(label) {
		    	label
		    		.text('OK!').addClass('valid')
		    		.closest('.form-group').addClass('has-success');
		    }
	    });
	};

	validator1();
	validator2();
	validator3();
	validator4();

	/**
	 * Select2 plugin
	 * @type {Number}
	 */
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ) {

		$('select.form-control').select2({
		 minimumResultsForSearch: -1,
		 dropdownAutoWidth: true, 
		 containerCssClass: "styled-dropdown-container",
		 dropdownCssClass: "styled-dropdown-list"
		});

	};
 
});