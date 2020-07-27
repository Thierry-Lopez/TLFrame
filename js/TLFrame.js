
	
		TLFrame = ( function() {

			let basePathSrcPattern = /(^|.*[\\\/])TLFrame\.js(?:\?.*|;.*)?$/i;
			
			const TLFrame = {
				
				status: 'unloaded',
				
				basePath: ( function() {
					
					let path = '';

					if ( !path ) {
						let scripts = document.getElementsByTagName( 'script' );

						for ( let i = 0; i < scripts.length; i++ ) {
							let match = scripts[ i ].src.match( basePathSrcPattern );

							if ( match ) {
								path = match[ 1 ];
								break;
							}
						}
					}

					return path;
					
				} )(),
				
				getUrl: function( resource ) {
					
					// If this is not a full or absolute path.
					if ( resource.indexOf( ':/' ) == -1 && resource.indexOf( '/' ) !== 0 )
						resource = this.basePath + resource;
					
					// Add the timestamp, except for directories.
					if ( this.timestamp && resource.charAt( resource.length - 1 ) != '/' && !( /[&?]t=/ ).test( resource ) )
						resource += ( resource.indexOf( '?' ) >= 0 ? '&' : '?' ) + 't=' + this.timestamp;
					
					return resource;
				},
				
				domReady: ( function() {
					let callbacks = [];
					
					function onReady() {
						try {
							if ( document.addEventListener ) {
								document.removeEventListener( 'DOMContentLoaded', onReady, false );
								executeCallbacks();
							}
						} catch ( er ) {}
					}

					function executeCallbacks() {
						var i;
						while ( ( i = callbacks.shift() ) )
							i();
					}
					
					return function( fn ) {
						
						callbacks.push( fn );
						
						if ( document.readyState === 'complete' )
							
							setTimeout( onReady, 1 );

						if ( callbacks.length != 1 )
							return;

						if ( document.addEventListener ) {
							
							document.addEventListener( 'DOMContentLoaded', onReady, false );

							window.addEventListener( 'load', onReady, false );

						}
					};
				} )()
				
			};
			
			return TLFrame;

		} )();
		
		
		
			
		
		
		


	
	