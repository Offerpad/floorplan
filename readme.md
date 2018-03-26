OfferPad Floorplan is a CSS framework and pattern library being built for future web projects. Floorplan allows for a solid foundation in creating new OfferPad websites and apps, as well as an easy way to understand and update existing properties.

This documentation is built currently with Jekyll and Sass, which means you will need Ruby to build it.

## Installation

### Windows

Install directly into Windows using Ruby for Windows. 

1. Install Ruby 2.4 via RubyInstaller along with the MSYS kit.
2. In Git Bash, navigate to the project once cloned and `gem install bundler`. Bundler will now install.
3. `bundle install` to install the gems needed. Verify jekyll is installed with `jekyll -v` or `jekyll build`.
4. Note: there is a bug with the eventmachine dependency in Windows which causes issues with `jekyll serve --livereload`. You'll need to `gem uninstall eventmachine --force` and then `gem install eventmachine --platform ruby` to get a version that does work.

### macOS

1. `bundle install` to install the gems needed. Verify jekyll is installed with `jekyll -v` or `jekyll build`.
2. That's it. Run `jekyll serve` to serve.
