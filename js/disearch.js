var disearch = {
	
	"search": null,
	
	init: function(){
		disearch.search = new Search( "cities2200.json", { setQuery: "City" });
		
		//load json file
		disearch.search.init();
		
		//search event
		disearch.keyup();
	
	},
	
	keyup: function(){
		$( '#di-search-input' ).keyup(function( e ){
			e.preventDefault();
			query = $( this ).val();
			disearch.search.searchQuery( query );
			disearch.listResults( disearch.search.results );
		});
		
	},
	listResults: function( results ){
		
		disearch.resetResults();
		console.log(results)
		totalResults = results.length;
		var html = "";

		$.each( results, function( index, value ){
			
			//var jsonTrim = value[ options.querySetting ].replace
			
			var cityTrim = value.City.replace( / /g,"" );
			var cityAdd = '<li><a href="#">'+value.City+', '+value.ST+'</a></li>';
			
			if( index%6 == 0 ) html += '<ul>'+cityAdd;
			else if( index%6 == 5 ) html += cityAdd+'</ul>'
			else html += cityAdd ;
			
		});
		
		$( '.di-results' ).append( html );
		disearch.click();
	},
	
	resetResults: function(){
	
		$( '.di-results' ).html( "" );
	
	},
	
	click: function(){
		$( '.di-results a' ).click(function( e ){
			e.preventDefault();
			
			//CLOSE Search overlay
			
			
			//CALL CityScreenDetails & Pass data from json file
			
			
		})
	}
	
}

disearch.init();