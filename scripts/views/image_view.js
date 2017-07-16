OMVC.image_view = function (model, rootObject) {
	var that = this;
	that.container = $('<div/>').appendTo(rootObject);
	that.container.addClass("container");
	that.container.addClass("hidden");
	that.div = $('<div/>').appendTo(that.container);
	that.div.addClass("image");
	model.modelChangedSubject.addObserver(function () {
	   if(model.getDestroy()){
		   that.container.remove();
		   return;
	   }
       if(!model.getLoading()){
		   that.div.removeClass("load");
		   that.div.css("background-image","url('"+model.getUrl()+"')");
	   }else{
		   that.div.addClass("load");
	   }
	   if(model.getShow()){
		   that.container.removeClass("hidden");
	   }else{
		   that.container.addClass("hidden");
	   }
	   if(model.getSelected()){
		   that.div.addClass("select");
	   }else {
		   that.div.removeClass("select");
	   }
    });
};