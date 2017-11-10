OfferPad Floorplan is a CSS framework and pattern library being built for future web projects. Floorplan allows for a solid foundation in creating new OfferPad websites and apps, as well as an easy way to understand and update existing properties.

This documentation is built currently with Jekyll and Sass, which means you will need Ruby to build it.

## Installation

### Windows

Install directly into Windows using Ruby for Windows. (More instructions to come.)

### Windows Linux Subsystem

Install using the Linux subsystem (Ubuntu) in Windows 10.

Prequisites:
- Windows 10 Creators Update
- Windows Linux Subsystem

#### 1. Install ruby, node, and git.

Open Bash and use the following commands:

```curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -```

```sudo apt-get update && sudo apt-get install build-essential ruby ruby-bundler nodejs git npm ruby-dev```

If you are prompted to install nodejs as root, do so separately, as `sudo`.

#### 2. Navigate to the StyleGuide project.

In Ubuntu for Windows you can navigate to your C drive via `/mnt/c`. Use this path to find your StyleGuide folder.

#### 3. Install gems

Run this command:

```sudo gem install bundler```

and then

```sudo bundle install```
