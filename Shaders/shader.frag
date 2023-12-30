precision mediump float; 
  
varying vec2 vTexCoord; 
  
// We need the sketch resolution to perform 
// some calculations 

uniform vec2 resolution; 
uniform float time;
uniform vec2 mouse;

float sdCircle( in vec2 p, in float r ) 
{
    return length(p)-r;
}

void main() {

   gl_FragColor = vec4(mouse.x, mouse.y, 0.5, 1.0 );
}