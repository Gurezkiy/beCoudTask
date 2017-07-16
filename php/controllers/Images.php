<?php

class Images{
	private $_params;
	 public function __construct($params){
        $this->_params = $params;
    }
	public function getImagesAction(){
		$dirs = array();
		$path = $_SERVER['DOCUMENT_ROOT'].'/'.$this->_params['path'].'/';
		if(file_exists($path)){
			$entries = scandir($path);
			foreach($entries as $entry){
				if ($entry!='.' && $entry!='..'){
					if(is_dir($path.$entry)){
						$dirs[] = $entry;
					}
					
				}
			}
			if(count($dirs)==0)throw new Exception('Path is empty.');
			$number = mt_rand(0, count($dirs) - 1);
		}else{
			throw new Exception('Path no found.');
		}
		$images = new ImagePath();
		$images->path = $path.$dirs[$number];
		$arr = $images->query();
		return array("path"=>$this->_params['path'].'/'.$dirs[$number],"images"=>$arr);
    }
}

?>