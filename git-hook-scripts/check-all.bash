#!/usr/bin/env bash

./git-hook-scripts/check-tests.bash
if [ $? -ne 0 ]; then
	exit 1
fi

./git-hook-scripts/check-msg.bash "$1"
if [ $? -ne 0 ]; then
	exit 1
fi