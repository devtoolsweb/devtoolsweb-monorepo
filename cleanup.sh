#!/bin/sh

lerna run clean
lerna clean -y
rm yarn.lock

for i in '.cache' '.rpt2_cache'; do
  find . -name "$i" -exec echo 'Remove dir:' '{}' \; | xargs rm -rf
done
