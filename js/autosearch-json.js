var Search = function(jsonData, options){
	var s = {};
	s.setQuery = options.setQuery;
	s.searchData = {};
	s.results = {};
	
	s.init = function( query ){
		//initialize json file & listen for keyup
		$.ajax({
			url: jsonData,
			type: 'GET',
			dataType: 'json',
			success: function( data ){
				//disearch.keyup( data );
				s.searchData = data;
			},
			error: function( request, error ){
				s.error = error;
				return s;
			}
		})
	}
	
	s.searchQuery = function( query ){
		s.results = {};
		if(query.length > 0){
			var j = 0;
			for( i=0, len=s.searchData.length; i < len; i++ ){
				if( s.searchData[ i ][ s.setQuery ].toLowerCase().indexOf( query.toLowerCase() ) == 0 ){
					s.results[ j ] = s.searchData[ i ];
					j++
				}
			}
		}
		
	}	
	
	return s;
	
}