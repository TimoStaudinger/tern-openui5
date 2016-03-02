# tern-openui5

[![Build Status](https://secure.travis-ci.org/TimoSta/tern-openui5.png)](http://travis-ci.org/TimoSta/tern-openui5)
[![NPM version](https://img.shields.io/npm/v/tern-openui5.svg)](https://www.npmjs.org/package/tern-openui5)

[tern-openui5](https://github.com/TimoSta/tern-openui5) brings autocomplete functionality for the [OpenUI5](http://openui5.org/) framework into your favorite code editor, powered by [Tern](http://ternjs.net/).

Tern is available for
- [Atom](https://atom.io/packages/atom-ternjs)
- [Eclipse](https://github.com/angelozerr/tern.java#readme)
- [Emacs](http://ternjs.net/doc/manual.html#emacs)
- [Vim](https://github.com/ternjs/tern_for_vim#readme)
- [Sublime Text](https://github.com/ternjs/tern_for_sublime#readme)

and [more](http://ternjs.net/#plugins).

## Demo
tern-openui5 used in combination with [Atom](https://atom.io/), the hackable text editor:

![Demo](demo/tern-openui5.gif)

## Setup
1. Install [Tern](http://ternjs.net/)
2. Copy the `openui5.js` file from this repository into the `plugin` directory of your tern installation
3. Configure tern for OpenUI5 support for your project by creating a `.tern-project` configuration file in the base directory of your project and add `openui5` to the plugins. An example `.tern-project` file could be:

        {
          "ecmaVersion": 5,
          "libs": [
            "browser",
            "jquery"
          ],
          "plugins": {
            "openui5": {}
          }
        }

### Setup in Atom
The setup steps for tern-openui5 in Atom can be made significantly faster and easier by an Atom plugin and npm:

1. **Install the [atom-ternjs](https://atom.io/packages/atom-ternjs) package in Atom.**    
  This package ships its own installation of Tern, no need for a separate setup here!
2. **Add the tern-openui5 plugin.**    
  Either follow the directions from the Setup section and copy the `openui5.js` file to the tern plugin directory at `~/.atom/packages/atom-ternjs/node_modules/tern/plugin`,    
  _**or**_    
  for the extra bit of convenience, install tern-openui5 via [npm](https://www.npmjs.com/package/tern-openui5):    

      $ cd ~/.atom/packages/atom-ternjs
      $ npm install tern-openui5
      
3. **Configure tern-openui5.**    
  Create a `.tern-project` file as described in the Setup section above. For Tern to recognize the newly configured project, **restart the Tern server** via the menu: _Packages > Atom Ternjs > Restart server_. Happy Hacking! :-)
