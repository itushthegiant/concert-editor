class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

   

    # ################
    # GET to /venues
    # ################
    if req.path.match(/venues/) && req.get?
      venues = Venue.all
      return [200, { 'Content-Type' => 'application/json' }, [ venues.to_json ]]

    # ################
    # GET to /concerts
    # ################
    elsif req.path.match(/concerts/) && req.get?
        concerts = Concert.all
        new_concerts = concerts.map do |concert|
          {
            id: concert.id,
            title: concert.title,
            date: concert.date,
            artist: concert.artist,
            venue: concert.venue
          }
        end
        return [200, { 'Content-Type' => 'application/json' }, [ new_concerts.to_json ]]

    # ################
    # GET to /artists
    # ################
    elsif req.path.match(/artists/) && req.get?
        artists = Artist.all
        return [200, { 'Content-Type' => 'application/json' }, [ artists.to_json ]]

    # ##################
    # POST to /concerts
    # ##################
    elsif req.path.match(/concerts/) && req.post?
        data = JSON.parse req.body.read
        venue = Venue.find_by(name: data['venue'])
        artist = Artist.find_by(name: data['artist'])
        concerts = Concert.create(title: data['title'], date: data['date'], artist_id: artist.id, venue_id: venue.id)
        return [200, { 'Content-Type' => 'application/json' }, [ concerts.to_json ]]

    # ################
    # DELETE to /venues
    # ################
    elsif req.delete?
      id = req.path_info.split('/concerts/').last
      concert = Concert.find(id)
      concert.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: 'Concert deleted!'}.to_json ]]

    else
      resp.write "Path Not Found"
    end 
    resp.finish
  end


end
