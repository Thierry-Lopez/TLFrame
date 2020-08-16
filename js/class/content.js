
	class TLFrameContent extends TLFrameElement {
		
		returnContent(){
			
			let content = '';
			content += 				'<div id="' + this.id + '" class="' + this.className + '" style="' + this.style + '">';
			
			let arrays = [
				{
					array: this.details,
					size:  this.details.length,
					i: 0,
					j: 0
				}
			];
			
			let column = arrays.length - 1;
			
			while(arrays.length > 0){
				
				if(arrays[column].j < arrays[column].array[arrays[column].i].length){
				
					if(arrays[column].j == 0)
						content += '<div>';
					
					content += '<div id="' + arrays[column].array[arrays[column].i][arrays[column].j].id + '" class="' + arrays[column].array[arrays[column].i][arrays[column].j].className + '" style="display: inline-block; vertical-align: top; ' + arrays[column].array[arrays[column].i][arrays[column].j].style + '">';
					
					if(!Array.isArray(arrays[column].array[arrays[column].i][arrays[column].j].content)){
					
						content += arrays[column].array[arrays[column].i][arrays[column].j].content;
						content += '</div>';
						arrays[column].j++;
				
					}else{
					
						arrays.push(
							{
								array: arrays[column].array[arrays[column].i][arrays[column].j]['content'],
								size: arrays[column].array[arrays[column].i][arrays[column].j]['content'].length,
								i: 0,
								j: 0
							}
						);
					
						column = arrays.length - 1;
					}
				}
				
				if(arrays[column].j >= arrays[column].array[arrays[column].i].length){
					content += '</div>';
					arrays[column].j = 0;
					arrays[column].i++;
					if(arrays[column].i >= arrays[column].size){
						arrays.pop();
						if(arrays.length > 0){
							content += '</div>';
							column = arrays.length - 1;
							arrays[column].j++;
						}
					}
				}
			}
	
			content += '</div>';
			
			if(this.debug == 1)
				console.log(content);
			
			return content;
		}
		
		setContent(selector){
			let content = this.returnContent();	
			document.querySelector(selector).innerHTML = content;
		}
		
		displayContent(){
			let content = this.returnContent();	
			document.querySelector(this.getSelectorParent()).innerHTML = content;
		}
		
		isContent(id){
			
			let arrays = [
				{
					array: this.details,
					size:  this.details.length,
					i: 0,
					j: 0
				}
			];
			
			let column = arrays.length - 1;
			
			while(arrays.length > 0){
				
				if(arrays[column].j < arrays[column].array[arrays[column].i].length){
					
					if(arrays[column].array[arrays[column].i][arrays[column].j].id == id)
						return true;
					
					if(!Array.isArray(arrays[column].array[arrays[column].i][arrays[column].j].content)){
						arrays[column].j++;
					}else{
						
						arrays.push(
							{
								array: arrays[column].array[arrays[column].i][arrays[column].j]['content'],
								size: arrays[column].array[arrays[column].i][arrays[column].j]['content'].length,
								i: 0,
								j: 0
							}
						);
					
						column = arrays.length - 1;
					}
					
				}
				
				if(arrays[column].j >= arrays[column].array[arrays[column].i].length){
					arrays[column].j = 0;
					arrays[column].i++;
					if(arrays[column].i >= arrays[column].size){
						arrays.pop();
						if(arrays.length > 0){
							column = arrays.length - 1;
							arrays[column].j++;
						}
					}
				}
			}
		}
		
		replaceContent(id, value){
			
			let arrays = [
				{
					array: this.details,
					size:  this.details.length,
					i: 0,
					j: 0
				}
			];
			
			let column = arrays.length - 1;
			
			while(arrays.length > 0){
				
				if(arrays[column].j < arrays[column].array[arrays[column].i].length){
					
					if(arrays[column].array[arrays[column].i][arrays[column].j].id == id){
						arrays[column].array[arrays[column].i][arrays[column].j].content = value;
						return true;
					}
					
					if(!Array.isArray(arrays[column].array[arrays[column].i][arrays[column].j].content)){
						arrays[column].j++;
					}else{
						
						arrays.push(
							{
								array: arrays[column].array[arrays[column].i][arrays[column].j]['content'],
								size: arrays[column].array[arrays[column].i][arrays[column].j]['content'].length,
								i: 0,
								j: 0
							}
						);
					
						column = arrays.length - 1;
					}
					
				}
				
				if(arrays[column].j >= arrays[column].array[arrays[column].i].length){
					arrays[column].j = 0;
					arrays[column].i++;
					if(arrays[column].i >= arrays[column].size){
						arrays.pop();
						if(arrays.length > 0){
							column = arrays.length - 1;
							arrays[column].j++;
						}
					}
				}
			}
			
		}
		
	}
		
	TLFrame.Content = TLFrameContent;
	
	
		
	
	