let url = $request.url;
if(url.indexOf('gws_rd=cr') != -1){
	$done({});
}else{
	url += '&gws_rd=cr';
	$done({url});
}