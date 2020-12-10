const requestURL = 'https://jsonplaceholder.typicode.com/users';
    function sendRequest(method, url, body = null) {
        return fetch(url).then( response => {
            return response.json()
        })
    }
    sendRequest('GET', requestURL).then( data => {
        drawTable(data);
    }).catch( error => console.error(error));
    
    function drawTable(data) {
        console.log('drawtable');
        var html = '';
        for (var i = 0; i < data.length; i++) {
        html += '<tr> <th scope="row">' + data[i].username + '</th>'
                +'<td>' + data[i].phone + '</td>'    
                +'<td>' + data[i].email + '</td>'
                +'<td>' + data[i].website + '</td>'
                +'<td>' + data[i].address.city + '</td>'
                +'<td>(' + data[i].address.geo.lat + ':' + data[i].address.geo.lng + '}</td>'
                +'<td>' + data[i].address.street + '</td>'
                +'<td>' + data[i].address.suite+ '</td>'
                +'<td>' + data[i].address.zipcode + '</td>'
                +'<td>' + data[i].company.name + '</td>'
                +'<td>' + data[i].company.catchPhrase + '</td>'
                +'<td>' + data[i].company.bs + '</td>'
         +'</tr>';
        }
        $('#table tbody').append(html);
    }  

