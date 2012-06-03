class ChartsController < ApplicationController

	respond_to :json

	def activity_by_team
		@activity = Activity.find(params[:activity_id])
		@checkpoints = @activity.checkpoints
		@teams = Team.all
		@colors = charts_colors

	end

	private 

	def charts_colors
		["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"]
	end
end
