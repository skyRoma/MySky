#!/usr/bin/env bash

GIT_DIR=$(git rev-parse --git-dir)

echo "Please, choose option to install:"
echo "1 - all"
echo "2 - check tests"
echo "3 - check commit message"


read option

FILE=$GIT_DIR/hooks/commit-msg
  
if [ -f $FILE ]; then 
	while true; do
		read -p "File $FILE exists. Would you like to replace it (y/n)?" yn
		case $yn in
			[Yy]* ) rm $FILE; break;;
			[Nn]* ) exit;;
			* ) 	echo "Please answer yes or no.";;
		esac
	done
fi 

if [ $option -eq 1 ];  then
	echo "Installing check-all..."
	# this command creates symlink to our commit-msg script
	ln -s ../../git-hook-scripts/check-all.bash $FILE
elif [ $option -eq 2 ];  then
	echo "Installing check-tests... "
	ln -s ../../git-hook-scripts/check-tests.bash $FILE
else
	echo "Installing check-msg... "
	ln -s ../../git-hook-scripts/commit-msg.bash $FILE
fi

echo "Done!"
