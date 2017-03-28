module Api::V1
  class ItemsController < ApiController
    # before_action :authenticate_v1_user!
    before_action :set_item, only: [:show, :update, :destroy]

    # GET /items
    def index
      render json: Item.all
    end

    # POST /items
    def create
      @item = Item.new(item_params)
      @item.user = User.first
      # @item.user = current_user - not working
      if @item.save
        json_response(@item, :created)
      else
        head :error
      end
    end

    # GET /items/:id
    def show
      json_response(@item)
    end

    # PUT /items/:id
    def update
      if @item.update(item_params)
        json_response(@item, :created)
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end

    # DELETE /items/:id
    def destroy
      @item.destroy
      head :no_content
    end

    private
    def item_params
      params.require(:item).permit(:name, :description)
    end

    def set_item
      @item = Item.find(params[:id])
    end

  end
end