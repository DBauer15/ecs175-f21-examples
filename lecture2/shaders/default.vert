#version 300 es

in vec3 inPosition;

void main() {
    gl_Position = vec4(inPosition, 1.0);
}