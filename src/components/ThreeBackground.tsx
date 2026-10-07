import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Floating Geometries (Cubes, Icosahedrons, Octahedrons)
    const objects: THREE.Mesh[] = [];
    const geometryList = [
      new THREE.IcosahedronGeometry(0.55, 0),
      new THREE.OctahedronGeometry(0.48, 0),
      new THREE.TorusGeometry(0.5, 0.12, 16, 32),
      new THREE.DodecahedronGeometry(0.45, 0),
      new THREE.BoxGeometry(0.6, 0.6, 0.6),
    ];

    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x1677d2,
      metalness: 0.6,
      roughness: 0.3,
      transparent: true,
      opacity: 0.85,
    });

    const cyanMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.7,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
    });

    const whiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.95,
    });

    const materials = [blueMaterial, cyanMaterial, whiteMaterial];

    // Create 16 floating shapes
    for (let i = 0; i < 16; i++) {
      const geo = geometryList[i % geometryList.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 14;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 6;

      const scale = 0.6 + Math.random() * 0.7;
      mesh.scale.set(scale, scale, scale);

      scene.add(mesh);
      objects.push(mesh);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const bluePointLight = new THREE.PointLight(0x123b8a, 3, 20);
    bluePointLight.position.set(-5, -3, 3);
    scene.add(bluePointLight);

    // Floating particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1677d2,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera tilt
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate objects
      objects.forEach((obj, idx) => {
        obj.rotation.x += 0.005 + (idx % 3) * 0.002;
        obj.rotation.y += 0.007 + (idx % 2) * 0.002;
        obj.position.y += Math.sin(elapsed * 1.5 + idx) * 0.003;
      });

      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
    />
  );
};
