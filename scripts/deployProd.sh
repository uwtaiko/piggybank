#!/bin/bash

source $(dirname $0)/print_tools.sh;

base_dir=$(pwd);

info_msg "Copying template files..." &&

cp ./buildTemplate/prod/ids/* ./dev/ids/ &&
cp ./buildTemplate/prod/.clasp.json ./build/ &&
cp ./buildTemplate/prod/projectInfo.ts ./dev/ &&

./scripts/build.sh;
exit_code=$?;

if [ $exit_code -eq 0 ]
then
    info_msg "Deploying..." &&

    cd build &&
    clasp login &&
    clasp push &&
    cd ..;
    exit_code=$?;
fi

info_msg "Cleaning up template files...";

cd $base_dir;
cp ./buildTemplate/blank/ids/* ./dev/ids/;
cp ./buildTemplate/blank/.clasp.json ./build/;
cp ./buildTemplate/blank/projectInfo.ts ./dev/;

exit $exit_code;
