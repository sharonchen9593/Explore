import axios from 'axios';

function getPictures(id) {

  var API_KEY = 'AIzaSyC60u3VSBRDeUpTyRRq-NImzW5L5GHmTDE'

  var url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=" + id + "&key=" + API_KEY;

  return Promise.resolve($.ajax({
    url:url,
    success: function(data) {
      return data;
    },
    async:false
  }))
}


export default function(state = null, action) {
  console.log("action", action)
  if (action.type==="FETCH_IMAGES") {
    //if (action.payload) {
      var data = action.payload.data.results
      var info = []
      var pictures = []
      var promise = Promise.resolve();
      var j = 0
      for (var i = 0; i<data.length-1; i++) {
        var obj = {}  // id, name, photosRef
          promise = getPictures(data[i].place_id)
            .then( function(picData) {
              obj.id = data[i].place_id;
              obj.name = data[i].name;
              var photoRef = []
              picData.result.photos.forEach(function(photo) {
                photoRef.push(photo.photo_reference)
              })
              obj.photoRef = photoRef;
              info.push(obj)
              j++
              console.log("data.length", data.length, "j", j, info)
              if (j === data.length-1) {
                  console.log("info", info)
                  return info;
                  // console.log(Object.assign({}, state, {info}))
                  // return Object.assign({}, state, {info});

              }
            })


      }
      // data.forEach(function(item, index) {
      // })


    //}
  } else {
    console.log("grr")
    return state;
  }
}









