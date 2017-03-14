# Webapp

## Architecture
```
webapp
    |- public
    |- src
        |- assets
            |- css
				|- sass
					|- base (These are mixins folder and element styles)
                        |- settings
						|- generic
                        |- core
                        |- components
                            |- javascript
                        |- utility
                    |- libs (Overwrite third party)
                        |- bootstrap
                            _datetimepicker.scss
                            _typeahead.scss
                        |- nicescroll
                            _nicescroll.scss
                        |- coppie
                            _coppie.scss
                        |- tooltipser
                            -tolltipser.scss
					|- ui (Define style for web)
						|- partials (Define style for master)
							_header.scss
							_footer.scss
							_socials.scss...
						|- pages (Define style for pages)
						|- modal (Define style for popups)
						|- prints (Define style for print file)
            |- images
            |- js
				|- modals
				|- pages
				ui-function.js
				ui-general.js
				ui-variables.js
			|- fonts
			|- favicon
        |- views
            |- master
				|- components
					meta.html
					favicon.html
					fonts.html
					css.html
					js.html
				|- partials
					sidebar.html
					header.html
					footer.html
					loading.html
				_layout.html
			|- content (There are components of pages)
				|- partials (This include inherit sections of page)
				|- modals (These are content of popups)
				|- pages (This include special section of page)
			index.html
```

## Usage

```
# Run live reload with localhost:8080
npm run dev
```

```
# Build minification css and js and optimize images
npm run build
```
