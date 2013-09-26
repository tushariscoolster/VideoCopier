# VideoCopier plugin for Phonegap #

This plugin copies video files from the Phonegap assets directory into internal storage (with MODE_WORLD_READABLE) and returns a URI to the copied file via callback. The copied file can then be played inline via standard HTML5 &lt;video&gt; tags. This is a workaround for the Phonegap / Android problem that video files in the Phonegap asset directory cannot be referenced in a  &lt;video&gt; tag. Tested in Phonegap 2.7.0 on a 2012 Nexus 7 with Android 4.3.
	
Thanks to [VideoPlayer Plugin](https://github.com/macdonst/VideoPlayer) from which this plugin borrows the basic idea and some code.

## Adding the Plugin to your project ##

Using this plugin requires [Android PhoneGap](http://phonegap.com/).

1. To install the plugin, move www/videocopier.js to your project's www folder and include a reference to it in your html file after cordova.js.

    &lt;script type="text/javascript" charset="utf-8" src="cordova-2.7.0.js"&gt;&lt;/script&gt;<br/>
    &lt;script type="text/javascript" charset="utf-8" src="videocopier.js"&gt;&lt;/script&gt;
    
2. Create a directory within your project called "src/com/phonegap/plugins/video" and move VideoCopier.java into it.

3. In your res/xml/config.xml file add the following line:

    &lt;plugin name="VideoCopier" value="com.phonegap.plugins.video.VideoCopier"/&gt;

## Using the plugin ##

The plugin creates the object 'window.plugins.videoCopier'. To use, call the copy() method:

<pre>
	/**
     * Copy video file from Asset folder to internal storage so that it can be played through a standard HTML5 &lt;video&gt; tag
     *
     * @param url           URL of the file to be copied
	 * @param callback      Callback function that gets called when copying is done. The URI of the copy is returned as a string.
     */
	copy(url, callback)
</pre>

Sample use:

<pre>
	window.plugins.videoCopier.copy('file:///android_asset/www/path/to/my/video', function(URIofCopyInInternalStorage) {
		$('#videocontainer').html('&lt;video src="' + URIofCopyInInternalStorage + '" preload="auto"&gt;&lt;/video&gt;');
		$('#videocontainer video').get(0).play();
	});
</pre>