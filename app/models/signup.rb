require 'bcrypt'

class Signup
    include BCrypt
    attr_reader :id, :username, :password, :avatar

    if (ENV['DATABASE_URL'])
     uri = URI.parse(ENV['DATABASE_URL'])
     DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
      DB = PG.connect(host: "", port: 5432, dbname: 'musicmood')
    end

    def initialize(opts={})
      @id = opts["id"].to_i
      @username = opts["username"]
      @password = opts["password"]
      @avatar = opts["avatar"]
    end

    def self.create(opts={})
      results = DB.exec(
        <<-SQL
          INSERT INTO users (username, password, avatar)
          VALUES ('#{opts["username"]}', '#{Password.create(opts["password"])}','#{opts["avatar"]}')
          RETURNING id, username, password, avatar
        SQL
      )
      return Signup.new(results.first)
    end

end
