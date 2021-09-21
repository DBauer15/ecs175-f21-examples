import Shader from './shader.js'

// Get a reference to the canvas element
const canvas = document.getElementById('webgl-canvas')

// Get a handle on the webgl context
const gl = canvas.getContext('webgl2') // for WebGL 1.x use 'webgl' instead

if (!gl)
    throw Error('Could not get WebGL context!')

// Set the GL clear color
gl.clearColor(0.0, 0.15, 0.32, 1.0)

// Load the default shader
const shader = new Shader(gl, './shaders/default.vert', './shaders/default.frag')

// Clear the screen with the color we defined earlier
gl.clear(gl.COLOR_BUFFER_BIT)

// Define a triangle in normalized screen coordinates
let vertices = new Float32Array([
    -0.5, -0.5, 0.0, 
    0.5, -0.5,  0.0, 
    0.0,  0.5,  0.0
]);

// Create array buffer and fill it with the coordinate data
let trianglePositionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, trianglePositionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Activate shader and map the buffered data to a shader attribute
shader.use()
shader.setArrayBuffer('inPosition', trianglePositionBuffer, 3)

// Define the viewport
gl.viewport(0, 0, 800, 600)

// Draw the triangle
gl.drawArrays(gl.TRIANGLES, 0, 3)