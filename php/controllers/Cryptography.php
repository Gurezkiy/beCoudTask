<?php

class Cryptography{
	private $_params;
	private $private_key = "-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: BCPG C# v1.6.1.0

lQOsBFlrcIgBCACIM7yhKFJwSG/sPmyuKqljUjPM8wEuk3Vs/dCUE+6mwFHUEoaz
6jfWbRSVx4ORqrKGbE1eoOJf9PZcyI1M01/8R2Xyd8MMaEZ6QlCry92HSiwyctMh
GTTUzLKUr1E6ZFHroiTrzgDj98UlFXMJOCvvncswlA3XbEnPVNRv8uOmOpd+hee3
20i4EHkSyYY2O+VqakzbLQkWug/gsgRQUdDCT5Ey7Wn7kRXwIch1rryQh05l3WT9
hbeD7XO73FOXbBOKvgmymlUDpi8cWGGCsJomGokGhQjYB0owBjX1Zf03CstUOTc9
6gWLJR57Lc5OprOsMRKa7FkbE4negrLX9JHxABEBAAH/AwMCFK3yRClhsMFgt5zv
/832GOKFe01CQirK4s5s2A0OlcG/ZzsC8L2nggUy6sIrxTbtgShl4cEXbm6hPkJu
Ma+8XuAyIDkDXi/ZCYF2NO7Yzh1KsPeslQwL+DRDXu8ght/hmZjzdxN5NZUs4LoT
6WxlxrvvYL+nCSKMbaFbyj1k5sRXnjusYym+zCVChMqplPg1LSTblD5P/iH+XTkm
hi7y4i05J0iCOpOAivlzGkkSu0TtodyvnzVxm9myf/kjGXcWuppofG+a8ywU5GwG
OvjgaUlIVVGKDqALRIn8FoVXNA7kKGZ5uAUXVaKkXV7z8NqgXCgGKxW9lGE1COsL
5NNDsPzBgg5j+TaZLpGZuAVz3udbmlm54Mn/qcr8Y74CdZTR5/w96tgJ+O36uilT
54E1ZmEgLuUAllev1InsLNSPZ1W5XDwSSIr7HVDV2hBJ+lQDRUvLsnxSd89qVyun
0vrTHYf+XwW101SYkDxI7Aoi/CodA5uWbXv/V6mO7CrK+CN0EWyby6mYdHnedvcD
1c98hxzlXaV9BwACqByNw3V7fitjkCu0Pqa1aMJxg9mNGh8qGE14iG4aSi9AbNoQ
fp1d3PsJg5yCcR9tmKKImYo2n+ko5Z68s4n7Alh7qVH9+ZhGoPqKDqNJcmfl+SAD
CkgwtRMtVhBtagdTYQJZDuwVXmovK+8Enu5P3M4SSEZsVOYDdl7NMUq1ZwKzqUpw
BcHd6bZzdVss5NIZhmkHQN8WpSpyG7TZ6JYe46c30v9g0QVPA577i7JnBFyhx50H
u+1urJxIuwAkxyrbXnLNYmD6uLzAKaDrGU7jPhS9GYLP8lLVSU1hxiF+eeHePk62
+JHxzolbllSxEXxmzVtE67jp69TB3SsO2HH8oQRFSrQAiQEcBBABAgAGBQJZa3CI
AAoJEJxZuzMUb4FAWMgH/Rl2e6utCxFtDnBj1ezWTyP8lNOtnttkpP+eXvzFTmZv
l3wtNaav0TkACtgtVUg0yN+9AZuC3Dn+q0oXy+UgDG6EZB+OU/5rRbv0cMya59/T
48RplsHVn7uOuWRoNdwfk5D34whflSnwKEuezUW3cKwoGPkmqSl5zzf97OtJV7b6
xcj6KZfMhYEGwzc6fgL9QDTm/6eH0xZfTE/Gl6zNoCpoAnjOJGRThV7mIFuAYLvB
Pd1LR+TqCgKAtLVOhWGBxCAxAuZzyTJ+uIgtH6HUss3KGjgqmrq2N+6Kbb2B96jy
ACKloHs0C/hmBYGkasoPtMFPqOE0FAfeC5WQYJrTfp0=
=JLCX
-----END PGP PRIVATE KEY BLOCK-----";
	private $public_key = "-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: BCPG C# v1.6.1.0

mQENBFlrcIgBCACIM7yhKFJwSG/sPmyuKqljUjPM8wEuk3Vs/dCUE+6mwFHUEoaz
6jfWbRSVx4ORqrKGbE1eoOJf9PZcyI1M01/8R2Xyd8MMaEZ6QlCry92HSiwyctMh
GTTUzLKUr1E6ZFHroiTrzgDj98UlFXMJOCvvncswlA3XbEnPVNRv8uOmOpd+hee3
20i4EHkSyYY2O+VqakzbLQkWug/gsgRQUdDCT5Ey7Wn7kRXwIch1rryQh05l3WT9
hbeD7XO73FOXbBOKvgmymlUDpi8cWGGCsJomGokGhQjYB0owBjX1Zf03CstUOTc9
6gWLJR57Lc5OprOsMRKa7FkbE4negrLX9JHxABEBAAG0AIkBHAQQAQIABgUCWWtw
iAAKCRCcWbszFG+BQFjIB/0ZdnurrQsRbQ5wY9Xs1k8j/JTTrZ7bZKT/nl78xU5m
b5d8LTWmr9E5AArYLVVINMjfvQGbgtw5/qtKF8vlIAxuhGQfjlP+a0W79HDMmuff
0+PEaZbB1Z+7jrlkaDXcH5OQ9+MIX5Up8ChLns1Ft3CsKBj5Jqkpec83/ezrSVe2
+sXI+imXzIWBBsM3On4C/UA05v+nh9MWX0xPxpeszaAqaAJ4ziRkU4Ve5iBbgGC7
wT3dS0fk6goCgLS1ToVhgcQgMQLmc8kyfriILR+h1LLNyho4Kpq6tjfuim29gfeo
8gAipaB7NAv4ZgWBpGrKD7TBT6jhNBQH3guVkGCa036d
=09NE
-----END PGP PUBLIC KEY BLOCK-----";
	public function __construct($params){
		$this->_params = $params;
	}
	public function cryptAction(){
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
			$openpgpg = new OpenPgp();
			$mess = $openpgpg->encrypt($this->_params['message'],$out);
			
		}catch(Exception $e){
			return $e->getMessage();
		}
		return $mess;
	}
	public function getPublicKeyAction(){
		return $this->public_key;
	}
}
?>