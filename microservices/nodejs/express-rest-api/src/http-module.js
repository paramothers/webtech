
function handleBadRequest(response){

    response.writeHead(400, {
        'Content-Type': 'text/plain'
    });
    response.end('Bad request ');
}
function handlerGetRequest(response){

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Get action was requested');
}

function handlerPostRequest(response){

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Post action was requested');
}

function handlerPutRequest(response){

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Put action was requested');
}


function handlerDeleteRequest(response){

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Delete action was requested');
}


exports.handleRequest = function(request, response){

    switch(request.method){       
        case 'GET':
            handlerGetRequest(response);
            break;
        case 'POST':
            handlerPostRequest(response);
            break;
        case 'PUT':
            handlerPutRequest(response);
            break;
        case 'DELETE':
            handlerDeleteRequest(response);
            break;
        default :
           handleBadRequest(response);
           break;        
    }

    console.log('Requset has been completed');
}

