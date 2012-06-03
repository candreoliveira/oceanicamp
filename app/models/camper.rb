# encoding: utf-8

class Camper
	include Mongoid::Document
	include Mongoid::Timestamps

	field :name, 			:type => String
	field :phones, 		:type => Array, 	:default => []
	field :church, 		:type => String
	field :birthday,	:type => Date
	field :email,			:type => String
	field :code,			:type => String

	belongs_to :team
	has_many :checkpoints

	def as_json(options = {})
    super(options.merge(:only => [ :_id, :name, :phones, :church, :birthday, :email, :code, :team_id ]))
  end
end
