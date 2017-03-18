module Api::V1
  class ApiController < ApplicationController
    def index
      render json: Item.all
    end
  end
end