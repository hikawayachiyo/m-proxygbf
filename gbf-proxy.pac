function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.gbf.game.mbga.jp/*")
		&& !shExpMatch(url, "*game.granbluefantasy.jp/(authentication|ob/r)*")) {
		return "PROXY localhost:8080";
	}
	
	return "DIRECT";
}
