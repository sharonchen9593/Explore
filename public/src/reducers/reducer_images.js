function getPictures(callback, id) {

  var API_KEY = 'AIzaSyC60u3VSBRDeUpTyRRq-NImzW5L5GHmTDE'

  var url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=" + id + "&key=" + API_KEY;

  $.ajax({
    url:url,
    success: function(data) {
      callback(data)
    },
    async: false
  })
}


export default function(state=null, action) {
  if (action.payload && action.payload.data) {
    var data = action.payload.data.results
    var info = []
    var pictures = []

    data.forEach(function(item) {
      var obj = {}
      obj['id'] = item.place_id;
      obj['title'] = item.name;

      getPictures(function(picData) {
        var photoRef = []
        picData.result.photos.forEach(function(photo) {
          photoRef.push(photo.photo_reference)
        })

        obj['photoRef'] = photoRef

      }, item.place_id)


      info.push(obj)
    })

  }
  if (action.type==="FETCH_IMAGES") {
    return info;
  }

  return state;
}