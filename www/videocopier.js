cordova.define("cordova/plugin/videocopier",
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var VideoCopier = function () {};

    /**
     * Copy video file from Asset folder to internal storage so that it can be played through a standard HTML5 <video> tag
     *
     * @param url           URL of the file to be copied
     */
    VideoCopier.prototype.copy = function(url, callback) {
		exec( 	function(result) {
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

    var videoCopier = new VideoCopier();
    module.exports = videoCopier;
});

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.videoCopier) {
    window.plugins.videoCopier = cordova.require("cordova/plugin/videocopier");
}