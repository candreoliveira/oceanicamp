class User
  include Mongoid::Document
  include Mongoid::Timestamps

	attr_accessible :password, :password_confirmation

  field :name,              :type => String
  field :nickname,  				:type => String
  field :crypted_password,  :type => String
  field :email,             :type => String
  field :last_login_at,     :type => DateTime
  field :last_logout_at,    :type => DateTime
  field :last_activity_at,  :type => DateTime

  validates_uniqueness_of     :nickname, :email
  validates_confirmation_of   :password, :on => :create
  validates_presence_of       :password, :on => :create
  validates_presence_of       :email, :nickname, :name
end
