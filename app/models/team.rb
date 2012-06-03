# encoding utf-8

class Team
	include Mongoid::Document
	include Mongoid::Timestamps

	field :name, 		:type => String
	field :leaders,	:type => Array
	field :score,		:type => Integer, :default => 0

	has_many :campers

	def as_json(options = {})
    super(options.merge(:only => [ :_id, :name, :leaders, :score ]))
  end
end