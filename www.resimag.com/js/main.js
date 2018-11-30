var resimag = {
	
	
	select_all: function(containerid){
			
		var divo="#"+containerid;
		$(divo).select();
			
	},
	
	r_yukle:function(){
			
		$("#tab_b").addClass("tab_selected");
		$("#tab_i").removeClass("tab_selected");
		$("#tab_b_div").show();
		$("#tab_i_div").hide();
		
			
	},
	
	netten:function(){
			
		$("#tab_b").removeClass("tab_selected");
		$("#tab_i").addClass("tab_selected");
		$("#tab_b_div").hide();
		$("#tab_i_div").show();
			
	},
	
	netten_yukle:function(){
		
		icerik=$("#netten_f").val();
		$("#loading").html('<img src="/images/loading.gif" width="32" height="32" />');
		
		$('#donen_sonuc').load('/ax_netten/',{'icerik':icerik });

		
	},
	
	
	
};



		
