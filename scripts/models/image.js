OMVC.image = function(_url,_id,callbackselect){
	var that = this;
	this.url = _url;
	this.id = _id;
	this.isLoading = true;
	that.show = false;
	this.select = false;
	this.image = new Image();
	that.destroyed = false;
	this.modelChangedSubject = OMVC.makeObservableSubject();
	this.image.onload = function(){
		that.isLoading = false;
		that.modelChangedSubject.notifyObservers();
	}
	this.image.src = this.url;
	this.getLoading = function(){
		return this.isLoading;
	}
	this.getUrl = function(){
		return this.url;
	}
	that.setShow = function(_show){
		that.show = _show;
		that.modelChangedSubject.notifyObservers();
	}
	that.getShow = function(){
		return that.show;
	}
	that.getSelected = function(){
		return this.select;
	}
	that.setSelect = function(_select){
		that.select = _select;
		callbackselect(that.id,_select);
		that.modelChangedSubject.notifyObservers();
	}
	that.destroy = function(){
		that.destroyed = true;
		that.modelChangedSubject.notifyObservers();
	}
	that.getDestroy = function(){
		return that.destroyed;
	}
	
};