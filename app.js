let timer = document.getElementById( 'timer' ).innerHTML

const runTimer = () => {
    if ( timer >= 0 )
    {
        document.getElementById( 'timer' ).innerHTML = timer
        setTimeout( runTimer, 1000 )
    }
    timer -= 1
}
setTimeout( runTimer, 1000 )
