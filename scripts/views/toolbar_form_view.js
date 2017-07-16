OMVC.toolbar_form_view = function (model, rootObject) {
	var that = this;
	that.div = $('<div/>').appendTo(rootObject);
	that.div.addClass("toolbar");
	that.h = $('<h1/>').appendTo($(that.div));
	that.h.text("Авторизация");
	that.fildsest = $("<div/>").appendTo($(that.div));
	that.fildsest.addClass("fieldset");
	that.form = $("<div/>").appendTo($(that.fildsest));
	that.form.addClass("form");
	that.input = $('<input  placeholder="Логин" type="text"/>').appendTo($(that.form));
	that.buttonAuth = $('<button class="button disable">ВОЙТИ</button>').appendTo($(that.form));
	that.buttonLogout = $('<button class="button hidden">Выйти</button>').appendTo($(that.form));
	model.modelChangedSubject.addObserver(function () {
        var valid = model.getValid();
        if(valid){
			that.buttonAuth.removeClass("disable");
		}else{
			that.buttonAuth.addClass("disable");
		}
		var show = model.getShow();
		if(!show){
			that.buttonLogout.removeClass("hidden");
			that.buttonAuth.addClass("hidden");
			that.input.addClass("hidden");
			that.div.addClass("small");
			that.h.text(model.getLogin());
		}
		if(model.getReset()){
			model.setReset(false);
			that.buttonLogout.addClass("hidden");
			that.buttonAuth.removeClass("hidden");
			that.input.removeClass("hidden");
			that.div.removeClass("small");
			that.h.text("Авторизация");
			that.input.val("");
		}
    });
};