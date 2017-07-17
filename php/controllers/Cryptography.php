<?php

class Cryptography{
	private $_params;
	private $private_key = "-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: GnuPG v2.0.22 (GNU/Linux)

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
=NCD/
-----END PGP PRIVATE KEY BLOCK-----

";
	private $public_key = "-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2.0.22 (GNU/Linux)

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
m3sDHjOwD4aDyRtMIOw=
=Agug
-----END PGP PUBLIC KEY BLOCK-----
";
	public function __construct($params){
		$this->_params = $params;
	}
	public function cryptAction(){
		$result = new stdClass();
		if(filter_var($this->_params['url'], FILTER_VALIDATE_URL) === FALSE){
			$sURL = $_SERVER['HTTP_HOST']."/".$this->_params['url'];
		}else{
			$sURL = $this->_params['url'];
		}
		$out = "";
		$curl = curl_init();
		if($curl){
			curl_setopt($curl, CURLOPT_URL, $sURL);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
			$out = curl_exec($curl);
			curl_close($curl);
		}else throw new Exception('curl failed!');
		try{
			$mess = OpenPgp::encrypt($this->_params['message'],$this->public_key);
			$decrypt = OpenPgp::decrypt($mess,$this->private_key);
			$result->encryptmessage = $mess;
			$result->decryptmessage = $decrypt;
			
		}catch(Exception $e){
			return $e->getMessage();
		}
		return $result;
	}
	public function getPublicKeyAction(){
		return $this->public_key;
	}
}
?>