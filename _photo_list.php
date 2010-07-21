<?php
$url = "http://api.flickr.com/services/feeds/photos_public.gne?id=87715586@N00&format=json&nojsoncallback=1";
if ( ! $result = apc_fetch($url)) 
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-TW; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.11");
    $result = curl_exec($ch);
    if ($result === FALSE) 
    {
        return FALSE;
    };
    apc_store($url, $result, 43200);
};
$result = json_decode($result, TRUE);
$result = $result["items"];
$data["photos"] = array();
foreach ($result as $item) {
    if (preg_match("/(http:\/\/.+static.flickr.com\/\d+\/\d+_[0-9a-z]+)_m\.jpg/", $item["media"]["m"], $result))
    {
        $cache = array();
        $cache["src"] = "{$result[1]}_s.jpg";
        $cache["link"] = $item["link"];
        $cache["title"] = $item["title"];
        $data["photos"][] = $cache;
        unset($cache);
    }
}

require_once "./views/_photo_list.php";
?>
