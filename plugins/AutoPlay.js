function AutoPlay(){


}

AutoPlay.prototype.run = function(player){
    
    //si no esta en mute
    if(!player.muted){

        //mutealo
        player.muted = true
    }

    //y reproduci el video
    player.play()
}

export default AutoPlay