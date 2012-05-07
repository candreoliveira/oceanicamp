# encoding: utf-8

class Camper
	include Mongoid::Document
	include Mongoid::Timestamps

	field :name, 		:type => String
	field :phones, 	:type => Array, 	:default => []
	field :church, 	:type => String

	belongs_to :team
	belongs_to :room

end
