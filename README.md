# ts3-19-sorting

More on design patterns, little project to implement sorting

-to compile ts to js:
tsc index.ts -> injex.js

-to create a tsconfig.json file do:
tsc --init

-once have tsconfig.json file and rootDir (src) and outDir (build) set just need to type:
'tsc' or 'tsc -w' to watch

-add package.json
npm init -y

npm install (--save) nodemon and concurrently

    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",

-start both scripts (start:build and start:run) in parallel using concurrently
"start": "concurrently npm:start:\*"
