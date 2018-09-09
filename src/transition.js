const TRANSITION = 'transition'
const ANIMATION = 'animation'
export let transitionProp = 'transition'
export let transitionEndEvent = 'transitionend'
export let animationProp = 'animation'
export let animationEndEvent = 'animationend'
const transformRE = /\b(transform|all)(,|$)/
if (window.ontransitionend === undefined &&
  window.onwebkittransitionend !== undefined
) {
  transitionProp = 'WebkitTransition'
  transitionEndEvent = 'webkitTransitionEnd'
}
if (window.onanimationend === undefined &&
  window.onwebkitanimationend !== undefined
) {
  animationProp = 'WebkitAnimation'
  animationEndEvent = 'webkitAnimationEnd'
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

function getTimeout (delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays)
  }
  return Math.max.apply(null, durations.map((d, i) => {
    return toMs(d) + toMs(delays[i])
  }))
}
const raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout
export function nextFrame (fn) {
  raf(() => {
    raf(fn)
  })
}
const getTransitionInfo = (el, expectedType) => {
  const styles = window.getComputedStyle(el)
  const transitionDelays = styles[transitionProp + 'Delay'].split(', ')
  const transitionDurations = styles[transitionProp + 'Duration'].split(', ')
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations)
  const animationDelays = styles[animationProp + 'Delay'].split(', ')
  const animationDurations = styles[animationProp + 'Duration'].split(', ')
  const animationTimeout = getTimeout(animationDelays, animationDurations)

  let type
  let timeout = 0
  let propCount = 0
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION
      timeout = transitionTimeout
      propCount = transitionDurations.length
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION
      timeout = animationTimeout
      propCount = animationDurations.length
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout)
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0
  }
  const hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property'])
  return {
    type,
    timeout,
    propCount,
    hasTransform
  }
}
export function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  nextFrame(() => {
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType)
    if (!type) return cb()
    const event = type === TRANSITION ? transitionEndEvent : animationEndEvent
    let ended = 0
    const end = () => {
      el.removeEventListener(event, onEnd) //eslint-disable-line
      cb()
    }
    const onEnd = e => {
      if (e.target === el) {
        if (++ended >= propCount) {
          end()
        }
      }
    }
    setTimeout(() => {
      if (ended < propCount) {
        end()
      }
    }, timeout + 1)
    el.addEventListener(event, onEnd)
  })
}
