require 'sinatra'
require 'json'
require 'httparty'

get '/api/connect/:search_word' do
  content_type 'application/json'
  response = HTTParty.get('https://owlbot.info/api/v1/dictionary/' + params[:search_word] + '?format=json')
  response.to_json
end
