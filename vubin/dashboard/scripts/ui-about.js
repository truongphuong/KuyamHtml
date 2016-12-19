tinymce.init({
    selector: '#txtAbout',
    height: 500,
    plugins: [
        "advlist autolink lists link image charmap anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste imagetools"
    ],
	menubar:false,
    statusbar: false,
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | link image",
    imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
	file_picker_types: 'image', 
    paste_data_images: true,
	file_picker_callback: function(callback, value, meta){
		var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    
    // Note: In modern browsers input[type="file"] is functional without 
    // even adding it to the DOM, but that might not be the case in some older
    // or quirky browsers like IE, so you might want to add it to the DOM
    // just in case, and visually hide it. And do not forget do remove it
    // once you do not need it anymore.

    input.onchange = function() {
      var file = this.files[0];
      
      // Note: Now we need to register the blob in TinyMCEs image blob
      // registry. In the next release this part hopefully won't be
      // necessary, as we are looking to handle it internally.
      var id = 'blobid' + (new Date()).getTime();
      var blobCache = tinymce.activeEditor.editorUpload.blobCache;
      var blobInfo = blobCache.create(id, file);
      blobCache.add(blobInfo);
      
      // call the callback and populate the Title field with the file name
      callback(blobInfo.blobUri(), { title: file.name });
    };
    
    input.click();
	},
	paste_postprocess: function(plugin, args) {
    console.log(args.content);
	 var blobCache = tinymce.activeEditor.editorUpload.blobCache;
    args.content += ' preprocess';
  },
	paste_preprocess: function(plugin, args) {
 
	 var blobCache = tinymce.activeEditor.editorUpload.blobCache;
	 var a = blobCache.getByUri($(args.content).attr('src'));
       console.log('a', a.blob());
  }
    /*content_css: [
        'http://fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        'http://www.tinymce.com/css/codepen.min.css'
    ]*/
});