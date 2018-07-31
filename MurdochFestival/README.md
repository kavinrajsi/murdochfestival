# Welcome to the Free Your Think App

## Prerequisites
* Node
* Git

## Install

*   npm install

## Run & Deploy

*   In Visual Studio code press F5 

## Upgrade the database schema
* Add-Migration {migration-name}
* Update-Database

## Visual Studio Run Errors
### If you get build errors. 
* Open Visual Studio Options (Tools / Options) Projects & Solutions, Web Packages Management, External Tools. Move the $Path to the top position
* If you still get errors run npm rebuild node-sass in both locations where 'gulpfile.js' exists
