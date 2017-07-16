OMVC.image_controller = function (model, view) {
	view.container.bind('click',function(){
		if(model.getSelected()){
			model.setSelect(false);
		}else{
			model.setSelect(true);
		}
	});
};