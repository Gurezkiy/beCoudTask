<?php
class ImagePath{
	public $path;
	private $allowed_types=array("jpg", "png", "gif");
	public function query(){
		$arr = array();
		$entries = scandir($this->path);
		if ($entries !== false){
			foreach($entries as $entry){
				if ($entry!='.' && $entry!='..'){
					if(!is_dir($path.$entry)){
						if(preg_match("/\.(?:png|gif|jpeg|jpg)$/i",$entry)){
							$arr[] = $entry;
						}
						
					}
					
				}
			}
			return $arr;
		}else throw new Exception('Error!');
		
	}
}
?>
