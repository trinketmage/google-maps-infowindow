const getGoogleClass = () => {
  return typeof google !== 'undefined'
    ? google.maps.OverlayView //eslint-disable-line
    : function noop() {}
}
export default class GoogleMapsInfoWindow extends getGoogleClass() {
  constructor(opts) {
    super(opts)
    if (typeof google === 'undefined') {
      console.warn('Google Maps is not defined') //eslint-disable-line
      return
    }
  }
}
