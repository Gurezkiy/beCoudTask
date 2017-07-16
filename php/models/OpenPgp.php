<?php
class OpenPgp {

	public static function encrypt($message, $public_key){
		putenv("GNUPGHOME=/tmp");
		if(!class_exists('gnupg')){
			throw new Exception('install gnupg please!');
		}
		$enc = (null);
		$gpg = new gnupg();
		$gpg->seterrormode(gnupg::ERROR_EXCEPTION);
		$info = $gpg->import($public_key);
		$gpg->addencryptkey($info['fingerprint']);
		$enc = $gpg->encrypt($message);
        return $enc;
	}
}
?>