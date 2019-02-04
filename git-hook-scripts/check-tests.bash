#!/usr/bin/env bash
echo "Running tests..."

./git-hook-scripts/run-tests.bash
if [ $? -ne 0 ]; then
	echo "Failed! Tests must be passed before commit." && exit 1
fi
echo "Tests passed!"