# NBT-Editor

### Introduction
The Named Binary Tag (NBT) file format is an extremely simple, albeit annoying, structured binary format used by the Minecraft game for a variety of things. Due to this, several third-party utilities now also utilize the format. You may find example files at the bottom of this article.

Mojang has also released a reference implementation along with their Anvil conversion tool, available from https://mojang.com/2012/02/new-minecraft-map-format-anvil/ - [Wiki.vg](https://wiki.vg/NBT#level.dat)

### Purpose
This tool is aimed to study NBT and methods of parsing hexadecimal data included within NBT files. It decodes data to JSON and is able to encode JSON to NBT files with any extension. This facilitates the ability with dealing with NBT files.

### About the project
The project is for self-learning mainly for developing of parser and dealing with data serialization and de-serialization. It is not aimed for any use except for learning, although it is a MIT license I highly suggest not using this tool as means for dealing with NBT data. The project also aims for dealing with creating a CLI using **Node.JS**. Although I considered at first creating the program in **C** I then decided it would be better exploring CLI software using **Node.JS** first as it is easier to extend it capabilities.

### Resources
- [NBT](https://wiki.vg/NBT#level.dat)
- [Named Binary Tag serialization](https://www.codeproject.com/Articles/427801/Named-Binary-Tag-serialization)
- [NBT Editor by iRath96](https://irath96.github.io/webNBT/)
- [Web NBT Repo](https://github.com/iRath96/webNBT)
- [Vars Script NBT Editor](http://varscript.ru/NBT/)
