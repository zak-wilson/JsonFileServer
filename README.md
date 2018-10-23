# JSON File Server

## Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
  - [Node](#node)
  - [IIS](#iis)

## Requirements

- Latest version of node

## Usage

### Node
```bash
npm install
node server.js
```

### IIS
1. Install [IISNode](https://github.com/azure/iisnode/wiki/iisnode-releases) and [URL Rewriting](https://www.iis.net/downloads/microsoft/url-rewrite)
1. Add to IIS by creating a site with the physical path pointing at the root of this directory