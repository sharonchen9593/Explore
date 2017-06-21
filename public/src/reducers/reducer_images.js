


// // $.ajax({
// //   url: "https://geoip-db.com/jsonp",
// //   jsonpCallback: "callback",
// //   dataType: "jsonp",
// //   success: function( location ) {
// //     var LatLon = getLatLon(location)

// //     var url = getURL(LatLon)

// //     $.ajax({
// //       url: url,
// //       type:"GET",
// //       crossDomain: true,
// //       success: function(data) {
// //         //getImagesInfo(data)

// //         var results = data.results
// //         var info = []
// //         results.forEach(function(item){
// //           var obj = {}
// //           obj['id'] = item.id;
// //           obj['title'] = item.name;
// //           info.push(obj)
// //         })

// //         function(info)

// //       }
// //     })


// //   }
// // })


// export default function() {

// 	return [
// 		{title: 'image1'},
// 		{title: 'image2'},
// 		{title: 'image3'},
// 		{title: 'image4'},
// 		{title: 'image5'}
// 	]
// }

export default function(state=[], action) {
  if (action.payload) {
    var data = action.payload.data.results
    var info = []
    data.forEach(function(item) {
      var obj = {}
      obj['id'] = item.id;
      obj['title'] = item.name;
      info.push(obj)
    })

  }

  console.log(info)
  if (action.type==="FETCH_IMAGES") {
    return info;
  }

  return state;
}