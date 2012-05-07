# encoding utf-8

class Event
	include Mongoid::Document
	include Mongoid::Timestamps

	field :name, 		:type => String
end