import TrackPlayer, { Event } from 'react-native-track-player'

export const PlaybackService = async () => {

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())

    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext())
    TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious())

    TrackPlayer.addEventListener(Event.RemoteJumpForward, event => TrackPlayer.seekBy(event.interval))
    TrackPlayer.addEventListener(Event.RemoteJumpBackward, event => TrackPlayer.seekBy(-event.interval))
    TrackPlayer.addEventListener(Event.RemoteSeek, event => TrackPlayer.seekTo(event.position))

}