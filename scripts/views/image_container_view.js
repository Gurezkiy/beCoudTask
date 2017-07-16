OMVC.image_container_view = function (model, rootObject) {
	var that = this;
	that.div = $('<div/>').appendTo(rootObject);
	that.div.addClass("image_container load");
	that.footer = $('<div/>').appendTo(rootObject);
	that.footer.addClass("footer");
	that.h1 = $("<h1/>").appendTo(that.footer);
	that.h1.text("Подтвердить выбор");
	that.chose = $("<button class='button'>Выбрать</button>").appendTo(that.footer);
	that.info = $("<PRE/>").appendTo(that.div);
	model.modelChangedSubject.addObserver(function () {
		var load = model.getLoading();
		if(load){
			that.div.addClass("load");
		}else that.div.removeClass("load");
		if(model.getSelected()!=-1){
			that.footer.addClass("show");
		}else{
			that.footer.removeClass("show");
		}
		if(model.getEndApp()){
			that.info.text(model.getMessage());
			return;
		}
	
		var arr = model.getImageList();
        if(!load){
			that.div.removeClass("load");
			for(var i=0;i<arr.length;i++){
				if(!arr[i].isAdd){
					var model_i = new OMVC.image(arr[i].url,arr[i].id,model.setSelected);
					var view = new OMVC.image_view(model_i,that.div);
					var controller = new OMVC.image_controller(model_i,view);
					arr[i].model = model_i;
					arr[i].view = view;
					arr[i].controller = controller;
					arr[i].isAdd = true;
					arr[i].model.setShow(true);
				}
			}
			
			
		}
    });
};