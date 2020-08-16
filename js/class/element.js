
	class TLFrameElement {
		
		// ---- Getters and setters
		
		get container(){
			return this._container;
		}
		
		set container(container){
			this._container = container;
		}
		
		get parent(){
			return this._parent;
		}
		
		set parent(parent){
			this._parent = parent;
		}
		
		get id(){
			if(!this._id){
				this._id = '';
			}
			return this._id;
		}
		
		set id(id){
			this._id = id;
		}
	
		get className(){
			if(!this._className){
				this._className = '';
			}
			return this._className;
		}
		
		set className(className){
			this._className = className;
		}
	
		get style(){
			if(!this._style){
				this._style = '';
			}
			return this._style;
		}
				
		set style(style){
			this._style = style;
		}
		
		get debug(){
			if(!this._debug){
				this._debug = false;
			}
			return this._debug;
		}
		
		set debug(debug){
			this._debug = debug;
		}
		
		get details(){
			return this._details;
		}
		
		set details(details){
			this._details = details;
		}
		
		// ---- End getters and setters
		
		htmlParams(id,className,style){
			this.id = id;
			this.className = className;
			this.style = style;
		}
		
		getSelectorParent(){
			let element = '';
			if(typeof this.container != 'undefined'){
				if(Array.isArray(this.container)){
					for (let i = 0; i < this.container.length ; i++){
						element += '#' + this.container[i] + ' ';
					}
				}else{
					element += '#' + this.container + ' ';
				}
			}
			if(typeof this.parent != 'undefined'){
				element += '#' + this.parent + ' ';
			}
			
			return element;
		}
		
		getSelectorId(){
			let element = '';
			element = this.getSelectorParent();
			element += '#' + this.id;
			return element;
		}
		
	}
	
	TLFrame.Element = TLFrameElement;
			
	
	