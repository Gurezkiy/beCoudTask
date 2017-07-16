OMVC.image_container = function(){
	var that = this;
	that.loading = true;
	that.reset = false;
	that.imageList = [];
	that.selectedId = -1;
	that.count_while = 0;
	that.modelChangedSubject = OMVC.makeObservableSubject();
	that.messageResult = "";
	that.getLoading = function(){
		return that.loading;
	};
	that.setLoading = function(_loading){
		that.loading = _loading;
		that.modelChangedSubject.notifyObservers();
	};
	that.addImage = function(_name,_url){
		var id = unique("gallery");
		var imageObj = {
			'isAdd':false,
			'url':_url,
			'name':_name,
			'id':id,
			'count':0,
			'model':null,
			'view':null,
			'controller':null
		};
		that.imageList.push(imageObj);
		that.modelChangedSubject.notifyObservers();
	};
	that.removeAllImages = function(){
		that.imageList = [];
		that.modelChangedSubject.notifyObservers();
	};
	that.getImageList = function(){
		return that.imageList.slice();
	};
	that.getReset = function(){
		return that.reset;
	};
	that.setReset = function(_reset){
		that.reset = _reset;
		if(_reset){
			that.show = false;
			that.loading = true;
			that.imageList = [];
			that.selectedId = -1;
		}
		that.modelChangedSubject.notifyObservers();
	};
	that.setSelected = function(_id,value){
		if(value){
			that.selectedId = _id;
			for(var i=0;i<that.imageList.length;i++){
				if(that.imageList[i].id!=_id){
					that.imageList[i].model.setSelect(false);
				} 
			}
		}else{
			if(that.selectedId==_id){
				that.selectedId = -1;
			}
		}
		
		that.modelChangedSubject.notifyObservers();
	}
	that.getSelected = function(){
		return that.selectedId;
	}
	that.swap = function(){
		that.count_while+=1;
			that.imageList.shuffle();
			for(var i=0;i<that.imageList.length;i++){
				that.imageList[i].model.destroy();
				if(that.imageList[i].model.getShow()){
					if(that.count_while<app.count_while_programm)
						that.imageList[i].isAdd = false;
				}
			}
		if(that.getEndApp()){
			app.endApp();
		}
		that.modelChangedSubject.notifyObservers();
	}
	that.choseImage = function(){
		that.count_img = 0;
		for(var i=0;i<that.imageList.length;i++){
			if(that.imageList[i].id== that.selectedId){
				that.imageList[i].count+=1;
				if(that.imageList[i].count==app.count_chose_image){
					that.imageList[i].model.setShow(false);
				}
				that.imageList[i].model.setSelect(false);
				that.selectedId = -1;
				that.swap();
			} 
		}
	}
	that.getEndApp = function(){
		var count_img = 0;
		for(var i=0;i<that.imageList.length;i++){
			if(that.imageList[i].model!=null){
				if(that.imageList[i].model.getShow())count_img++;
			}else count_img++;
		}
		if(that.count_while>=app.count_while_programm || count_img==0){
			return true;
		}else return false;
	}
	that.getMessage = function(){
		return that.messageResult;
	}
	that.setMessage = function(_data){
		that.messageResult = _data;
		that.modelChangedSubject.notifyObservers();
	}
};