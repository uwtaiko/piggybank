#!/bin/bash

source $(dirname $0)/print_tools.sh;

info_msg "Removing generated files...";

rm ./build/main-bundle.js >/dev/null 2>&1;
rm ./build/test-bundle.js >/dev/null 2>&1;

info_msg "Cleaning up template files..." &&

cp ./buildTemplate/blank/ids/* ./dev/ids/ &&
cp ./buildTemplate/blank/.clasp.json ./build/ &&
cp ./buildTemplate/blank/projectInfo.ts ./dev/;

exit 0;
