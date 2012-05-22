class Activity
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title,				:type => String
	field :checkpoint,	:type => Boolean, 	:default => false
	field :start_at, 		:type => DateTime
	field :end_at,	 		:type => DateTime
end
