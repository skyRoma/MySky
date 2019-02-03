#!/usr/bin/env ruby
#message_file = ARGV[0]
#message = File.read(message_file)
#testsResult = exec 'yarn test'

testsResult = `./run-tests.bash`

message = "2"
if message.length < 40
  puts "[POLICY] Your message has length less than 40 characters"
  puts "[STANDARD] Your message should be in the format: ‘TASK_ID description’ "
  puts testsResult
  exit 1
end

