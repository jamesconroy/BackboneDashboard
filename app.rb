require 'bundler'
Bundler.require()


# ***CONNECTION***
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'infocards'
)

# ***MODELS***
require './models/card'

# ***VIEW ROUTES***

get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end

# ***API ROUTES***

get '/api/cards' do
  content_type :json
  Card.all.to_json
end

get '/api/cards/:id' do
  content_type :json
  id = params[:id]
  card = Card.find(id)
  card.to_json
end

post '/api/cards' do
  content_type :json
  data = params[:card]
  new_card = Card.create(data)
  new_card.to_json
end

put '/api/cards/:id' do
  content_type :json
  id = params[:id]
  data = params[:card]
  card = Card.find(id)
  card.update(data).to_json
end

patch '/api/cards/:id' do
  content_type :json
  id = params[:id]
  data = params[:card]
  card = Card.find(id)
  card.update(data).to_json
end

delete '/api/cards/:id' do
  content_type :json
  id = params[:id]
  Card.delete(id)
  {message: "Successfully deleted card"}.to_json
end
