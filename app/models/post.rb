class Post
  attr_reader :id, :username, :avatar, :post, :mood, :song
  if (ENV['DATABASE_URL'])
   uri = URI.parse(ENV['DATABASE_URL'])
   DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "", port: 5432, dbname: 'musicmood')
  end

  def initialize(opts={})
    @id = opts["id"].to_i
    @username = opts["username"]
    @avatar = opts["avatar"]
    @post = opts["post"]
    @mood = opts["mood"]
    @song = opts["song"]
  end

  def self.all
    results = DB.exec("SELECT * FROM posts ORDER BY id DESC;")
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
        INSERT INTO posts (username, avatar, post, mood, song)
        VALUES ('#{opts["username"]}','#{opts["avatar"]}','#{opts["post_body"]}','#{opts["mood"]}','#{opts["song"]}')
        RETURNING id, username, avatar, post, mood, song;
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
        SET username='#{opts["username"]}', avatar='#{opts["avatar"]}', post='#{opts["post_body"]}', mood='#{opts["mood"]}', song='#{opts["song"]}'
        WHERE id=#{id}
        RETURNING id, username, avatar, post, mood, song;
      SQL
    )
    return Post.new(results.first)
  end
end
