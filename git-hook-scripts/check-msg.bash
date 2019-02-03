#!/usr/bin/env ruby
message_file = ARGV[0]
message = File.read(message_file)

if message.length < 40
  puts "[POLICY] Your message has length less than 40 characters"
  puts "[STANDARD] Your message should be in the format: 'TASK_ID description'"
  exit 1
end

