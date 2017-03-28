require 'rails_helper'

RSpec.describe "Items API", type: :request do
  let!(:user) { create(:user) }
  let!(:items) { create_list(:item, 10, user: user) }
  let(:item_id) { items.first.id }

  describe 'GET /v1/items' do
    before { get 'v1/items' }

    it 'return items' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /v1/items/:id' do
    context 'when the record exists' do
      it 'returns the item' do
        expect(json).not_to be_empty
        expect(json.id).to eq(item_id)
      end
    end

    context 'when the record does not exist' do
      let(:item_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Item/)
      end
    end
  end

  describe 'POST /v1/items' do
    let(:valid_attributes) { { title: 'Do sth', description: 'Something', user: user } }

    context 'when the request is valid' do
      before { post '/todos', params: valid_attributes }

      it 'creates an item' do
        expect(json['name']).to eq('Do sth')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/todos', params: { title: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Created by can't be blank/)
      end
    end
  end

  describe 'PUT /v1/items/:id' do
    let(:valid_attributes) { { title: 'Shopping' } }

    context 'when the record exists' do
      before { put "/items/#{item_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /items/:id' do
    before { delete "/items/#{item_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
