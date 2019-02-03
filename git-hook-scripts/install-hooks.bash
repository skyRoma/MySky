#!/usr/bin/env bash

GIT_DIR=$(git rev-parse --git-dir)

echo "Please, choose option to install:"
echo "1 - all"
echo "2 - check commit message"
echo "3 - check tests"


read option

if [ $option -eq 1 ];  then
	# this command creates symlink to our pre-commit script
	echo "Installing check-all.."
	ln -s ../../git-hooks-scripts/check-all.bash $GIT_DIR/hooks/commit.msg
elif [ $option -eq 2 ];  then
	echo "Installing check-tests..."
	ln -s ../../git-hooks-scripts/check-tests.bash $GIT_DIR/hooks/commit.msg
else
	echo "Installing check-msg.."
	ln -s ../../git-hooks-scripts/check-msg.bash $GIT_DIR/hooks/commit.msg
fi

echo "Done!"
