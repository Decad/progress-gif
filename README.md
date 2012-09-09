progress-gif
============

Command Line tool that will watch a directory containing the source for a website for changes, when a change has occured a snapshot of the website is taken using http://phantomjs.org/. Upon interupting this tool (ctrl + c) it will bundle the images into a gif file showing how the website progressed during development.

Usage
=====

Run the progress shell script with the following agurments.

```shell
progress folder url output.gif
```

Dependencies
============

This tool assumes you have http://phantomjs.org/ installed and on your PATH as well as using the `convert` command for producing the final gif