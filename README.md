# Ex10cAngularBasics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.
- uses angular modules
- uses angular routes
- uses angular material
- shows how to use "static modules" (see modules bindings, ..) 
- shows how to use "dynamic modules" (see  ..)
- shows how to use "routes" along with "dynamic modules" (see modules ..)
- shows how to customize "tslint" rules via tslint.json (see tslint.json's git commit log)
- shows 4 ways of "binding" a component's class(controller, .ts file) to it's view(template, .html file) (see bindings component in bindings module)
- shows .. ways of "component interaction", how parent/child components or sibling components can interact(pass data or events or share data) between them

## Parts of project
### 4 ways of "Class to Template binding" for a component
- bindings is the module(directory) that has code for it
- bindings component(bindings/bindings) shows all 4 ways

### ways of "Component Interaction"(pass data or events or share data) between Components(like parent/child, siblings, etc)
- componentInteractions is the module(directory) that has code for it

## github related
### to add remote github of this project at gitbash command line with default remote name of 'origin'
- 1st create the remote github project via github <br>
https://github.com/fdu-csci3444/ex10c-angular-basics
- add git remote at gitbash command line
```bash
cd /c/fdu/csci344/projects/ex10c-angular-basics
git remote add origin https://github.com/fdu-csci3444/ex10c-angular-basics.git
```
- to see the above added remote in remotes list <br>
origin  https://github.com/fdu-csci3444/ex10c-angular-basics.git (fetch) <br>
origin  https://github.com/fdu-csci3444/ex10c-angular-basics.git (push)  <br>
```bash
git remote -v
```
- to see detailed info (inspect) of remote named 'origin'
```bash
git remote show origin
```

### to push to remote at gitbash command line local branch 'master' to remote named 'origin' 
- NOTE ilker below '-u' sets upstream reference and git will know wherer to fetch or pull or push in the future
```bash
git push -u origin master
```

### to pull(which does fetch + merge) from remote at gitbash command line from remote named 'origin' to local branch 'master' 
```bash
git pull origin master
```

### to fetch to remote at gitbash command line from remote named 'origin' 
```bash
git fetch origin
```


## To run via dev server
- 1st time need to install all dependencies in package.json by running `"npm install"`
- then just run via `"ng serve"` or `"ng serve -o"` or `"npm start"` (which in turn runs "ng serve" as defined in "start" script in package.json)
- if default port 4200 is already taken by another running app, can specify a different port (like 4201) via `"npm server -o --port 4201"`
```dos
cd ex10c-angular-basics
npm install
ng serve -o
npm start
ng serve -o --port 4201
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
