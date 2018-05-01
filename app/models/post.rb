class Post
  attr_reader :id, :user_id, :mood, :song
  if (ENV['DATABASE_URL'])
   uri = URI.parse(ENV['DATABASE_URL'])
   DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "", port: 5432, dbname: 'musicmood')
  end

  def initialize(opts={})
    @id = opts["id"].to_i
    @user_id = opts["user_id"].to_i
    @mood = opts["mood"]
    @song = opts["song"]
  end

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
        users.*,
        posts.id,
        posts.mood,
        posts.song,
        posts.user_id
        FROM users
        JOIN posts
        ON users.id = posts.user_id
        ORDER BY posts.id DESC
        LIMIT 40;
      SQL
    )
    results.each do |result|
      puts result
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM posts WHERE id=#{id};")
    return Post.new(results.first)
  end

  def self.create(opts={})
    results = DB.exec(
      <<-SQL
        INSERT INTO posts (user_id, mood, song)
        VALUES ('#{opts["user_id"]}','#{opts["mood"]}','#{opts["song"]}')
        RETURNING id, user_id, mood, song;
      SQL
    )
    return Post.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM posts WHERE id=#{id}")
    return {deleted: true}
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE posts
        SET user_id='#{opts["user_id"]}', mood='#{opts["mood"]}', song='#{opts["song"]}'
        WHERE id=#{id}
        RETURNING id, user_id, mood, song;
      SQL
    )
    return Post.new(results.first)
  end
end
