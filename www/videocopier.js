function VideoCopier() {
}

 /**
     * Copy video file from Asset folder to internal storage so that it can be played through a standard HTML5 <video> tag
     *
     * @param url           URL of the file to be copied
     */
    VideoCopier.prototype.copy = function(url, callback) {
		cordova.exec( 	function(result) {
					callback(result);	// Returns URL to a copy in internal storage (as a String)
				},
			  	function(result) {
					callback("myerror");
				},
			  	"VideoCopier",
			  	"copyVideo",
			  	[url]
			);
    };

VideoCopier.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.videoCopier = new VideoCopier();
  return window.plugins.videoCopier;
};

cordova.addConstructor(VideoCopier.install);
