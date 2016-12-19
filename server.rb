require 'sinatra'
require 'json'
require 'httparty'

# Great work figuring out how to proxy requests to a local server!
get '/api/connect/:search_word' do
  content_type 'application/json'
  response = HTTParty.get('https://owlbot.info/api/v1/dictionary/' + params[:search_word] + '?format=json')
  response.to_json
end
