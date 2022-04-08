#/bin/sh
if [ "<$1>" = "<>" ]; then
    echo "Usage: repo-cmd <command>"
    exit 1
fi

wd=$(pwd)
find ./packages -mindepth 1 -maxdepth 1 -type d | \
    grep -v '/\.' | \
    while read p; do
	cd "$wd/$p"
	pwd
	$@
	cd "$wd"
    done
