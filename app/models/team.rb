# encoding utf-8

class Team
	include Mongoid::Document
	include Mongoid::Timestamps

	field :name, 		:type => String
	field :leaders,	:type => Array

	has_many :campers
end