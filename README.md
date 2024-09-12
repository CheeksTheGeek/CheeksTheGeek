![](https://github.com/CheeksTheGeek/cheeksthegeek.github.io/blob/783304c7d9bb201dfdde4eb2e7d12fdb6d362920/nested-wavy.gif)

Hi, I'm Chaitanya Sharma, an undergrad at [uwaterloo](https://uwaterloo.ca/) where I'm studying computer engineering with a specialization in quantum engineering and an option in artificial intelligence.

I've worked on some projects you might find of interest.

I'm actively working on some repositories/projects (some of them are pinned too):
- DBs: I wanted to learn about databases, so i decided, I'm just gonna binge-dev some.
- dist-sys (early stage): some distributed systems projects I'm working on, I've started with a distributed file system (inspired by the Google File System, and Hadoop Distributed File System), and
- rtl-design: I really liked my digital hardware design course, which got me into Verilog/SystemVerilog. This is just an effort to keep that in continuity!

  (I'm taking a computer architecture course right now, where we're building a whole RISC-V Processor core in Verilog!)
- pyjsoncanvas: Obsidian open sourced their canvas file format as a standard, and this is just a python library to interface with that file format.

    I'm trying to keep up with theirs and others' (in the infinite canvas ecosystem) work in the [Open Canvas Working Group](https://www.canvasprotocol.org/) where they're trying to build an interoperable standardized fileformat/protocol for infinite canvas tools like Excalidraw, tldraw and JSON Canvas.


fun fact about me: I play tabla <img src="https://github.com/CheeksTheGeek/cheeksthegeek.github.io/blob/9ce73ee32a4d45ee8593308e295031f1766766b6/tabla.png" alt="tabla" height="24" style="vertical-align: text-bottom;">, an indian percussion instrument

---

btw, shaders are really cool, but really hard, and I've been trying to get into it as a hobby, but I need to first build some first principles for it, if you got some resources for it, hmu from any of the links on the side!
exempli gratia, the one on the top, which was created with just this[^1]:
```glsl
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
```

[^1]: rendered with [shadergif](https://shadergif.com/)
