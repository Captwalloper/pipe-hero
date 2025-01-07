# Install

## NVM
To manage node runtime & package manager, [install nvm][1]
* `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`
<br>or
* `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`

## Setup node & yarn
* `nvm install node` // installs latest node; if this doesn't work, instead nvm install [version specified in .nvmrc]
* `npm install -g yarn`

## Yarn
* `yarn`
* `yarn run` // lists all scripts

## Run (Local)
`yarn run start`

## Github Pages
`yarn run deploy`

[1]: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating