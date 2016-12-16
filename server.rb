require 'sinatra'
require 'json'
require 'httparty'
require 'pry'

get '/api/connect/:search_word' do
  content_type :json
  @response = HTTParty.get('https://owlbot.info/api/v1/dictionary/' + params[:search_word] + '?format=json')
  binding.pry
  @response
end
