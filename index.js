// Add your code here
function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }


// const url = 'http://localhost:3000/users'
// function submitData(name, email){
//     let formData = {
//       name,
//        email
//     }

//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     }
    
//     return fetch(url, options)
    // .then(res => res.json())
    // .then(json => {
    //     document.append(json.id)

    // })
    // .catch(error => {
    //     document.append(error.message)
    //   })

    // post with url, headers of content-type, accept, 
    // body with name and email passed to submitData assigned to keys and stringified


// }