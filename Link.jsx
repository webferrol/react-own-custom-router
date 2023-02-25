function navigate (href) {
  // history.pushState() anexa un registro en la sesión de historial del navegador
  window.history.pushState({}, '', href) // No refresca la página

  // Crear un evento personalizado
  const navigationEvent = new Event(import.meta.env.VITE_PUSHSTATE)

  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = event => {
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
    const isMainEvent = event.button === 0 // Main button pressed, usually the left button or the un-initialized state
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault()
      navigate(to)
    }
  }
  return (<a target={target} href={to} onClick={handleClick} {...props} />)
}
