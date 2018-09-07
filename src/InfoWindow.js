const getGoogleClass = () => {
  return google.maps.OverlayView//eslint-disable-line
}
export default class GoogleMapsInfoWindow extends getGoogleClass() {
  constructor(opts) {
    super(opts)
    if (typeof google === 'undefined') {
      console.warn('Google Maps is not defined') //eslint-disable-line
      return
    }
    this.marker = opts.marker
    this.map_ = opts.marker.getMap()
    console.log(this.map_)
    this.position = opts.marker.position
    // opts.content.classList.add('infowindow-bubble-content')
    // pixelOffset.appendChild(opts.content)
    this.anchor = document.createElement('div')
    this.openened = false
    this.anchor.classList.add('infowindow-tip-anchor')
    // this.anchor.appendChild(pixelOffset)
    // this.stopEventPropagation()
    google.maps.event.addListener(this.marker, 'click', () => { //eslint-disable-line
      !this.map ? this.open() : this.close()
    })
  }
  // panMap() {
  //   var map = this.map_
  //   var bounds = map.getBounds()
  //   if (!bounds) return
  //   const { position } = this
  //   if (bounds.contains(position)) {
  //     setTimeout(() => {
  //       const mapDiv = map.getDiv()
  //       const bounding = this.anchor
  //         .querySelector('div')
  //         .getBoundingClientRect()
  //       let y = 0
  //       let x = 0
  //       if (bounding.top - bounding.height - 30 < 0) {
  //         y = bounding.top - bounding.height - 30
  //       } else if (bounding.bottom > mapDiv.offsetHeight) {
  //         y = bounding.top - mapDiv.offsetHeight + 110
  //       }
  //       if (bounding.left < 0) {
  //         x = bounding.left - 20
  //       } else if (bounding.right > mapDiv.offsetWidth) {
  //         x = bounding.left - mapDiv.offsetWidth + bounding.width + 20
  //       }
  //       if (x !== 0 || y !== 0) {
  //         map.panBy(x, y)
  //       }
  //     }, 0)
  //   } else {
  //     map.panTo(position)
  //   }
  // }
  open() {
    this.setMap(this.map_)
  }
  close() {
    this.setMap(null)
  }
  onAdd() {
    this.openened = true
    this.getPanes().floatPane.appendChild(this.anchor)
    // this.panMap()
  }
  onRemove() {
    this.openened = false
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor)
    }
  }
  draw() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position)
    var display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? 'block'
        : 'none'
    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px'
      this.anchor.style.top = divPosition.y + 'px'
      this.anchor.style.width = '100px'
      this.anchor.style.height = '100px'
      this.anchor.style.backgroundColor = 'blue'
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display
    }
  }
  stopEventPropagation() {
    const { anchor } = this
    anchor.style.cursor = 'auto'
    ;[
      'click',
      'dblclick',
      'contextmenu',
      'wheel',
      'mousedown',
      'touchstart',
      'pointerdown'
    ].forEach(event => {
      anchor.addEventListener(event, function(e) {
        e.stopPropagation()
      })
    })
  }
}
