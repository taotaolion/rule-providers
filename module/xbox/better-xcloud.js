const regex='</title>';const replace_str='</title>\
<script type="text/javascript" async="async" src="https://objects.githubusercontent.com/github-production-release-asset-2e65be/666209424/90bd00d9-50a4-4c63-bf57-32d233715b27?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=releaseassetproduction%2F20241116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241116T093939Z&X-Amz-Expires=300&X-Amz-Signature=4d0e4d1c2fc6b7d79e9f2bd2b485a9d550382e7f609d8a5855ce42f69ca08cdd&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3Dbetter-xcloud.user.js"></script>\
'
if($response.body){var body=$response.body.replaceAll('</TITLE>','</title>').replaceAll(regex,replace_str)};const headers=$response.headers;headers['Content-Security-Policy']='*';$done({headers:headers,body:body});
