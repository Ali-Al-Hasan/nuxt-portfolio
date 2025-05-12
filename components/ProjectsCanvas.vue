<template>
    <div class="projects-container" ref="scene"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Matter from 'matter-js'
  
  const scene = ref(null)
  
  onMounted(() => {
    const {
      Engine, Render, Runner, World,
      Bodies, Body, Constraint, Mouse,
      MouseConstraint, Query, Events
    } = Matter
  
    const width  = window.innerWidth
    const height = 480
    const engine = Engine.create()
    engine.gravity.y = 1
  
    const render = Render.create({
      element : scene.value,
      engine,
      options : {
        width,
        height,
        background : '#fdfdfd',
        wireframes : false,
        pixelRatio : window.devicePixelRatio
      }
    })
  
    World.add(engine.world, [
      Bodies.rectangle(width / 2,     0, width, 20, { isStatic: true }),
      Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }),
      Bodies.rectangle(0,        height / 2, 20, height, { isStatic: false }),
      Bodies.rectangle(width,    height / 2, 20, height, { isStatic: false }),
    ])
  
    const palette = ['#ff5c00', '#7b4c2e', '#ffae7b', '#ff8450']
    const projects = []
    const info = Array.from({ length: 12 }, (_, i) => ({
      title : `Project ${i + 1}`,
      link  : `https://example.com/project-${i + 1}`
    }))
  
    info.forEach((p, i) => {
      const size   = 60 + Math.random() * 25
      const mass   = 1   + Math.random() * 4
      const color  = palette[i % palette.length]
      const isCircle = i % 3 === 0
  
      const body = isCircle
        ? Bodies.circle(140 + i * 55, 100, size / 2, {
            restitution: 0.9,
            render: { fillStyle: color }
          })
        : Bodies.rectangle(140 + i * 55, 100, size, size, {
            restitution: 0.8,
            chamfer: { radius: 12 },
            render: { fillStyle: color }
          })
  
      Body.setMass(body, mass)
      body.label = p.link
  
      if (i % 4 === 0) {
        World.add(engine.world, Constraint.create({
          pointA: { x: body.position.x, y: 35 },
          bodyB : body,
          length: 110,
          stiffness: 0.025,
          damping: 0.04
        }))
      }
  
      projects.push(body)
    })
  
    World.add(engine.world, projects)
  
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.15, render: { visible: false } }
    })
    World.add(engine.world, mouseConstraint)
  
    Events.on(mouseConstraint, 'mouseup', e => {
      if (!mouseConstraint.body) return       
      const { x, y } = e.mouse.position
      const [hit] = Query.point(projects, { x, y })
      if (hit) window.open(hit.label, '_blank')
    })
  
    Render.run(render)
    Runner.run(Runner.create(), engine)
  })
  </script>
  
  <style scoped>
  .projects-container {
    width: 100%;
    max-width: 1400px;
    margin: 3rem auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 24px rgba(0,0,0,.08);
    background: linear-gradient(135deg,#ffffff 0%,#f9f9f9 100%);
  }
  </style>
  