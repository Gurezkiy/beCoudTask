OMVC.toolbar_form = function(){
	this.login  = "";
	this.show = true;
	this.valid = false;
	this.reset = false;
	this.modelChangedSubject = OMVC.makeObservableSubject();
	
	this.setLogin = function(_login){
		this.login = _login;
		this.modelChangedSubject.notifyObservers();
	};
	this.getLogin = function(){
		return this.login;
	};
	this.setError = function(_error){
		this._error = _error;
		this.modelChangedSubject.notifyObservers();
	};
	this.getError = function(){
		return this.error;
	};
	this.setShow = function(_show){
		this.show = _show;
		this.modelChangedSubject.notifyObservers();
	};
	this.getShow = function(){
		return this.show;
	};
	this.getValid = function(){
		return this.valid;
	}
	this.setValid = function(_valid){
		this.valid = _valid;
		this.modelChangedSubject.notifyObservers();
	}
	this.setReset = function(_reset){
		this.reset = _reset;
		if(_reset){
			this.login  = "";
			this.show = true;
			this.valid = false;
		}
		this.modelChangedSubject.notifyObservers();
	}
	this.getReset = function(){
		return this.reset;
	}
	
};