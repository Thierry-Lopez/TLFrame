
	class TLFrameLoader {
		
		// ---- Getters and setters
		
		get scripts(){
			return this._scripts;
		}
		
		set scripts(scripts){
			this._scripts = scripts;
		}
		
		get loadedScript(){
			if(!this._loadedScript){
				this._loadedScript = [];
			}
			return this._loadedScript;
		}
		
		set loadedScript(script){
			this._loadedScript = script;
		}
		 
		// ---- End getters and setters
		
		loadScripts(){
			
			for(let scripts in this.scripts){
				for ( let i = 0; i < this.scripts[scripts].length; i++ ){
					if(!this.isLoaded(this.scripts[scripts][i]))
						this.load(this.scripts[scripts][i]);
				}
				if(!this.isLoaded(scripts))
					this.load(scripts);
			}
		}
		
		load(script){
			
			if(this.isLoaded(script))
				return;
			
			this.loadedScript.push(script);
			document.write('<script src="' + TLFrame.getUrl('class/' + script)  + '"></script>');
		}
		
		isLoaded(script){
			for ( let i = 0; i < this.loadedScript.length; i++ ){
				if(this.loadedScript[i] ===  script){
					return true;	
				}
			}
			return false;
		}
		
	}
	
	TLFrame.Loader = TLFrameLoader;
	
	TLFrame.loading = new TLFrame.Loader();
	
	TLFrame.loading.scripts = {
		'content' : ['element'],
		'text_aera' : ['element']
	};
	
	TLFrame.loading.loadScripts();
	
	
	
	
		
		
	
	