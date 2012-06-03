class Activity
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title,					:type => String
	field :checkpoint,		:type => Boolean, 	:default => false
	field :start_at, 			:type => Time
	field :end_at,	 			:type => Time
	field :processed,			:type => Boolean, :default => false
	field :with_ranking,	:type => Boolean, :default => false
	field :ranking_points,:type => Hash,	:default => {}
	field :ranking,				:type => Hash,	:default => {}

	has_many :checkpoints

	before_create :process_ranking_points
	before_update :process_ranking_points

	def as_json(options = {})
    super(options.merge(:only => [ :_id, :title, :checkpoint, :start_at, :end_at, :processed, :with_ranking, :ranking ])).merge({:ranking_points => self.ranking_points.values})
  end

  def process_ranking_points
  	if ranking_points.class == Array

  		new_ranking_points = {}

  		ranking_points.each_with_index do |point, index|
  			new_ranking_points["#{index + 1}"] = point
  		end

  		self.ranking_points = new_ranking_points
  	end
  end
end
