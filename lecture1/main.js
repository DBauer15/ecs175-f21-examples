// Get a reference to the canvas element
const canvas = document.getElementById('webgl-canvas')

// Get a handle on the webgl context
const gl = canvas.getContext('webgl') // for WebGL 1.x use 'webgl' instead

if (!gl)
    throw Error('Could not get WebGL context!')

// Set the GL clear color
gl.clearColor(0.0, 0.15, 0.32, 1.0)

// Define the viewport
gl.viewport(0, 0, 800, 600)

// Clear the screen with the color we defined earlier
gl.clear(gl.COLOR_BUFFER_BIT)