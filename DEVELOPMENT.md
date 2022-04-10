# Using the source code of the DevToolsWeb project

## Pre-requisites

- Install the latest stable version of [Node.js](https://nodejs.org/en/)
- Install yarn package manager globally:
  ```
  npm install -g yarn
  ```

## Getting started

- Clone the repository:
  ```
  git clone https://github.com/devtoolsweb/devtoolsweb-monorepo.git <project_name>
  cd <project_name>
  ```

- Then clone the rest of the required repositories into the "packages" directory, e.g.
  ```
  cd packages
  git clone https://github.com/devtoolsweb/ts-goodies.git
  ```

- Install all package dependencies and link any cross dependencies:
  ```
  lerna bootstrap
  ```

## Build projects

From any subdirectory of the project, run the command:
```
lerna run build
```

## Testing

Some packages contain their own set of tests. In order to run the tests, you need to go to the directory of the selected package and run the build command:

```
cd packages/<package_name>
yarn run test
```

## Monorepo tools

- TODO: Add description of service scripts
