<?php
include_once 'php/models/ImagePath.php';
include_once 'php/models/OpenPgp.php';
try {
    $params = $_REQUEST;
    $controller = ucfirst(strtolower($params['controller']));
    $action = strtolower($params['action']).'Action';
    if(file_exists("php/controllers/{$controller}.php") ) {
        include_once "php/controllers/{$controller}.php";
    } else {
        throw new Exception('Controller is invalid.');
    }

    $controller = new $controller($params);
    if(method_exists($controller, $action) === false ) {
        throw new Exception('Action is invalid.');
    }
 
    //execute the action
    $result['data'] = $controller->$action();
    $result['success'] = true;
 
} catch(Exception $e ) {
    $result = array();
    $result['success'] = false;
    $result['errormsg'] = $e->getMessage();
}
 
//echo the result of the API call
echo json_encode($result);
exit();
?>