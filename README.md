# snax-voter - Block Producer Voting & Wallet for Snax blockchain

`snax-voter` is a limited-functionality release of a light wallet being designed for the Snax blockchain. This application can be used to connect to a remote Snax API endpoint to perform producer voting actions and a few basic wallet commands.

**If you don't need any advanced options, we recommend to use [Snax extension for Chrome](https://chrome.google.com/webstore/detail/snax/dolcmddbbplempeembpecnpllnbgjlal) instead of this wallet.**

## Features

- **Block Producer Voting**: Select which block producers to support and cast your vote. Please note that the block producer voting UI is not a research tool; it is a simple interface that provides a secure way to vote.
- **Token Transfers**: Transfer Snax or any other token you may have a balance for to another user or exchanges.
- **CPU/Bandwidth Staking**: Stake your Snax as either Bandwidth or CPU. This grants rights to resource usage on the network, in addition to conveying weight while voting for block producers.
- **Local Wallet**: Set a password while importing your private key to create a local wallet. Your key will be encrypted locally using this password. This password will be required each time you need to unlock the wallet.
- **Temporary Usage**: If you prefer not to store your keys within the application, simply choose not to set a password. When the application quits, your key will be forgotten.

## Installation

Download the latest release for your OS from [https://github.com/SnaxFoundation/snax-voter/releases](https://github.com/SnaxFoundation/snax-voter/releases)

To determine which file you need, if you are:

- **MacOS User**: Download either `dmg` (`snax-voter-***.dmg`) file
- **Windows User**: Download `exe` (`snax-voter-***.exe`) file
- **Linux User**: Download either `deb` (`snax-voter-***-_amd64.deb`) file or `AppImage` (`linux-snax-voter-***-x86_64.AppImage`) file

## Advanced

### Security: Private Keys

When using `snax-voter`, all transactions are signed within the application and your key is never transmitted. If a local wallet password is specified, the application will also save and encrypt your key for future use, using AES-256 encryption. The current password/key encryption scheme can [currently be found here](https://github.com/aaroncox/eos-voter/blob/master/app/shared/actions/wallet.js#L71-L86).

### Endpoints

We offer a public list of nodes within this repository for use with this application:

[https://github.com/SnaxFoundation/snax-voter/blob/master/nodes.md](https://github.com/SnaxFoundation/snax-voter/blob/master/nodes.md)

This list will be updated over time and can be referenced from within the initial connection screen in the app.

### Build it yourself

If you'd rather build the application yourself, please ensure you have nodejs/npm/yarn already installed locally.

**Note**: If you are configuring this Electron application within a Windows development environment, it will involve additional steps.

```
git clone https://github.com/SnaxFoundation/snax-voter.git snax-voter
cd snax-voter
npm install
cd app
npm install
cd ..
```

Then, depending on what OS you use, either:

- MacOS: `npm run package-mac`
- Linux: `npm run package-linux`
- Windows: `npm run package-win`

If you are building a binary, it must be compiled from the target OS. Windows builds need to be built on Windows, etc.

The files built will be located in the `releases` folder within the root project folder.

### Running development mode

```
git clone https://github.com/SnaxFoundation/snax-voter.git snax-voter
cd snax-voter
npm install
cd app
npm install
cd ..
npm run dev
```
