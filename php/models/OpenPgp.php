<?php
class OpenPgp{
	public static $passphrase = "gurezkiy123";
    private static function getGnupg()
    {
		putenv("GNUPGHOME=/tmp");
        if(!class_exists('gnupg')){
            throw new Exception('install gnupg please!');
        } else {
            $gpg = new gnupg();
            $gpg->seterrormode(gnupg::ERROR_EXCEPTION);
            return $gpg;
        }
    }
    public static function decrypt($message, $private_key)
    {
        $gpg = self::getGnupg();
        $private_key = $gpg -> import($private_key);
        $gpg -> adddecryptkey($private_key['fingerprint'],self::$passphrase);
        $enc = $gpg -> decrypt($message);
        if(!$enc){
            return $gpg -> geterror();
        } else {
            return $enc;
        }
    }
    public static function encrypt($message, $public_key)
    {
            $gpg = self::getGnupg();
            $public_key = $gpg -> import($public_key);
            $gpg -> addencryptkey($public_key['fingerprint']);
            $enc = $gpg -> encrypt($message);
        return $enc;
    }
}
?>