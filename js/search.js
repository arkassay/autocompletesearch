var disearch = {
	init: function(){
		//open dark overlay
		
		//initialize json file & listen for keyup
		$.ajax({
			url: "cities2200.json",
			type: 'GET',
			dataType: 'json',
			success: function( data ){
				console.log( "GOT DATA" )
				disearch.keyup( data );
			},
			error: function( request, error ){
				console.log( error )
			}
		})
	},
	keyup: function( cities ){
		$( '#di-search-input' ).keyup(function( e ){
			searchVal = $( this ).val();
			results = {};
			
			if(searchVal.length > 0){
				var j = 0;

				for( i=0, len=cities.length; i < len; i++ ){
					if(cities[ i ].City.toLowerCase().indexOf( searchVal.toLowerCase() ) == 0){
						results[ j ] = cities[ i ];
						j++
					}
				}
			}
			disearch.listResults( results );
		});
	},
	searchByName: function( city ){
		
	},
	listResults: function( results ){
		
		disearch.resetResults();
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