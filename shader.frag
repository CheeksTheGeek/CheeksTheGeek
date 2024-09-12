#version 300 es
precision mediump float;

in vec2 UV;
uniform float time;
uniform float ratio;
out vec4 out_color;

float noise(vec3 pos) {
    return fract(sin(dot(pos.xyz, vec3(9.3974, 480.823972, 20382.164))) * 23402.5453);
}

void main() {
    vec2 uv = UV * 2.0 - 1.0;
    uv.x *= ratio;
    
    vec3 displacedPosition = vec3(uv, 0.0);
    displacedPosition.y += sin(displacedPosition.x * 1.2 + time) * 1.8;
    displacedPosition.x += cos(displacedPosition.y * 5.0 + time) * 0.3;
    vec3 color;
    color.r = sin(displacedPosition.x * 5.0 + time) * 0.5 + 0.5;
    color.g = cos(displacedPosition.y * 5.0 + time) * 0.5 + 0.5;
    color.b = sin(displacedPosition.z * 5.0 + time + noise(displacedPosition) * 5.0) * 0.5 + 0.5;
    out_color = vec4(color, 1.0);
}
