if($response.status != 200){
	$done({});
}else{
	let jbody = JSON.parse($response.body);
	jbody["domain"] = ".google.com";
	jbody["searchAuthority"] = "https://www.google.com";
	jbody=JSON.stringify(jbody);
	$done({body:jbody});
}