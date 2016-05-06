doc_dW='1100px';
doc_dH='750px';
function doc_openDoc(url) {
	return window.showModalDialog(url,'',"dialogWidth="+doc_dW+";dialogHeight="+window.screen.height+";resizable=1;minimize=yes;maximize=yes;");
}