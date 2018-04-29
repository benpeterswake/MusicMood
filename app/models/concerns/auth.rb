class Auth

  require 'net/http'
  require 'json'

  def initialize(opts={})

  end

  def self.all
    # my_client_id = '5a75d4050889419bb36e5d8edc60bca2';
    # scopes = 'user-read-private user-read-email';
    # redirect_uri = 'http://localhost:3000';
    # url = 'https://accounts.spotify.com/authorize' +
    # '?response_type=code' +
    # '&client_id=' + my_client_id +
    # (scopes ? '&scope=' + scopes : '') +
    # '&redirect_uri=' + redirect_uri
    # uri = URI(url)
    # return Net::HTTP.get(uri)
    # JSON.parse(response)
    # return response
    url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    JSON.parse(response)

  end

end
