OMVC.image_container_controller = function (model, view) {
	api.getImages(app.path,function(data){
		app.path_selected = data.path;
		for(var i=0;i<data.images.length;i++){
			model.addImage(data.images[i],data.path+"/"+data.images[i]);
		}
		model.setLoading(false);
	},function(error){
		toast.message(error);
		model.setLoading(false);
	});
	
	view.chose.bind('click',function(){
		model.choseImage();
	});
};