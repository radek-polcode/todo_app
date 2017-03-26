module Api::V1
  class ItemsController < ApiController
    before_action :authenticate_user!
    before_action :set_item, only: [:show, :update, :destroy]

    # GET /todos
    def index
      render json: Item.all
    end

    # POST /todos
    def create
      @item = Item.new(item_params)
      @item.user = current_user
      if @item.save
        json_response(@item, :created)
      else
        head :error
      end
    end

    # GET /todos/:id
    def show
      json_response(@todo)
    end

    # PUT /todos/:id
    def update
      @item.update(todo_params)
      head :no_content
    end

    # DELETE /todos/:id
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