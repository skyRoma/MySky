#!/usr/bin/env ruby
message_file = ARGV[0]
message = File.read(message_file)
$regex = /^[A-Z]{2,15}-\d{1,4}:\s\w+/

if message.length < 40 || !$regex.match(message)
  puts "[POLICY] Your message has length less than 40 characters"
  puts "[STANDARD] Your message should be in the format: 'TASK_ID description'"
  exit 1
end

