function loadExternalFile( url )
{
    let req = new XMLHttpRequest( );
    req.open( "GET", url, false );
    req.send( null );
    return ( req.status == 200 ) ? req.responseText : null;
}

export {
    loadExternalFile
}