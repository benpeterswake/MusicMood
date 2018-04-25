class Post
  attr_reader :id, :username, :avatar, :post, :mood, :song
  DB = PG.connect(host: "localhost", port: 5432, dbname: 'musicmood')

  def initialize(opts={})
    @id = opts["id"].to_i
    @username = opts["username"]
    @avatar = opts["avatar"]
    @post = opts["post"]
    @mood = opts["mood"]
    @song = opts["song"]
  end

  def self.all
    results = DB.exec("SELECT * FROM posts;")
    results.each do |result|
      puts result
    end
  end

  def self.find(id)

  end

  def self.create(opts={})

  end

  def self.delete(id)

  end

  def self.update(id, opts={})

  end
end
