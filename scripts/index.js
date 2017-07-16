var program = function(){
	var that = this;
	that.date = new Date();
	that.program_login = '';
	that.path = 'img';//имя папки для подпапок с изображениями
	that.path_selected = '';//имя выбранной папки
	that.count_chose_image = 3; //сколько раз может быть выбрана одна и та же картинка
	that.count_while_programm = 4; //количество повторений программы
	that.pgp_key = "public_key.php";
	that.image_container = null;
	that.toolbar_form = new OMVC.toolbar_form();
	that.toolbar_form_view = new OMVC.toolbar_form_view(that.toolbar_form,$("body"));
	that.toolbar_form_controller = new OMVC.toolbar_form_controller(that.toolbar_form,that.toolbar_form_view);
	that.setLogin = function(_login){
		that.program_login = _login;
	};
	that.formatParam = function(param){
		return "["+param+"];";
	};
	that.endApp  = function(){
		that.image_container.setLoading(true);
		var inf = that.formatParam(that.program_login)+that.formatParam(formatDate(that.date))+that.formatParam(that.path_selected);
		var arr = that.image_container.getImageList();
		for(var i=0;i<arr.length;i++){
			if(arr[i].count>0){
				inf+=that.formatParam(arr[i].name);
			}
		}
		api.encrypt(that.pgp_key,inf,function(data){
			that.image_container.setMessage(data);
			that.image_container.setLoading(false);
		},function(err){
			toast.message(err);
		});
		
	};
	that.start = function(){
		if(!that.toolbar_form.getShow()){
			that.image_container = new OMVC.image_container();
			var image_container_view = new OMVC.image_container_view(that.image_container,$("body"));
			var image_container_controller = new OMVC.image_container_controller(that.image_container,image_container_view);
		}
	};
	that.destroy = function(){
		$('body').html('');
		that = new program();
	}

};
var app = null;
$(document).ready(function(){
	 app = new program();
	/*var image_container = new OMVC.image_container();
	var image_container_view = new OMVC.image_container_view(image_container,$("body"));
	var image_container_controller = new OMVC.image_container_controller(image_container,image_container_view);*/
});
const toast = new siiimpleToast({
	vertical: 'top',
	horizontal: 'center',
	time:5000
});

const unique = (function() {
    var cntr = 0;
    return function(prefix) {
        prefix = prefix || "";
        return prefix + cntr++;
    }
})();
Array.prototype.shuffle = function(b){
 var i = this.length, j, t;
 while( i ) 
 {
  j = Math.floor( ( i-- ) * Math.random() );
  t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
  this[i] = this[j];
  this[j] = t;
 }
 return this;
};
const formatDate = function(ssDate) {
	var options = {
	  era: 'long',
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric',
	  weekday: 'long',
	  timezone: 'UTC',
	  hour: 'numeric',
	  minute: 'numeric',
	  second: 'numeric'
	};
	ssDate.toLocaleString("ru", options);
	var dd = ssDate.getDate();
	var mm = ssDate.getMonth()+1; //January is 0!
	var yyyy = ssDate.getFullYear();
	if(dd<10) {
		dd='0'+dd;
	} 
	if(mm<10) {
		mm='0'+mm;
	} 
	var hours = ssDate.getHours();
	if(hours<10) {
		hours='0'+hours;
	} 
	var minutes =  ssDate.getMinutes();
	if(minutes<10) {
		minutes='0'+minutes;
	} 
	var seconds = ssDate.getSeconds();
	if(seconds<10) {
		seconds='0'+seconds;
	} 
	return dd + "." + mm + "." + yyyy + " " + hours + ":" + minutes + ":" + seconds;
}