class Session
  attr_reader :id, :user_id

  if (ENV['DATABASE_URL'])
   uri = URI.parse(ENV['DATABASE_URL'])
   DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "", port: 5432, dbname: 'musicmood')
  end

  def initialize(opts={})
    @id = opts["id"].to_i
    @user_id = opts["user_id"]
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM sessions")
  end

  def self.create(user)
    results = DB.exec(
      <<-SQL
        INSERT INTO sessions (user_id)
        VALUES (#{user})
        RETURNING id, user_id
      SQL
    )
  end

end
