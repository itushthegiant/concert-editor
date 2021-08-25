class Application

  def call(env)
    resp = Rack::Response.new
    @req = Rack::Request.new(env)

    if @req.path.match(/artists\/\d+\/concerts/) && @req.get?
        concerts = Concert.where("artist_id = #{params_id}")
        new_concerts = concerts.map do |concert|
          {
            title: concert.title,
            date: concert.date,
            artist: concert.artist,
            venue: concert.venue
          }
        end
        return [200, { 'Content-Type' => 'application/json' }, [ new_concerts.to_json ]]
    elsif @req.path.match(/artists/) && @req.get?
        artists = Artist.all
        return [200, { 'Content-Type' => 'application/json' }, [ artists.to_json ]]
    elsif @req.path.match(/concerts/)

    else
      resp.write "Path Not Found"
    end

    resp.finish
  end



  def params_id
    @req.path_info[/\d+/]
  end

end
