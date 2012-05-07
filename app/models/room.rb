# encoding utf-8

class Room
	include Mongoid::Document
	include Mongoid::Timestamps

	field :number, 		:type => String
	field :gender, 		:type => String		# "M", "F"
	field :hierarchy,	:type => Hash, :default => {:leader => nil, :assistant => nil, :supervisor => nil}

	has_many :campers
end
