class Checkpoint
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :camper
  belongs_to :activity
end
