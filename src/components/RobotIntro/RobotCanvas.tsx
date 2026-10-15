import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RobotCanvasProps {
  isSpeaking: boolean;
  introStage: number; // 0 = start, 1 = speaking, 2 = done/transitioning
  isTransitioningOut?: boolean;
}

export const RobotCanvas: React.FC<RobotCanvasProps> = ({
  isSpeaking,
  introStage,
  isTransitioningOut
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isSpeakingRef = useRef(isSpeaking);
  isSpeakingRef.current = isSpeaking;
  const stageRef = useRef(introStage);
  stageRef.current = introStage;
  const transitioningRef = useRef(isTransitioningOut);
  transitioningRef.current = isTransitioningOut;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.3, 5.0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Futuristic Lighting
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainLight.position.set(4, 8, 6);
    scene.add(mainLight);

    const blueRimLight = new THREE.DirectionalLight(0x1677d2, 3.8);
    blueRimLight.position.set(-6, 2, -4);
    scene.add(blueRimLight);

    const cyanRimLight = new THREE.PointLight(0x38bdf8, 3.5, 15);
    cyanRimLight.position.set(3, 1, -2);
    scene.add(cyanRimLight);

    // 3. Materials
    const armorMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4f9ff,
      metalness: 0.85,
      roughness: 0.2,
    });

    const darkJointMaterial = new THREE.MeshStandardMaterial({
      color: 0x123b8a,
      metalness: 0.9,
      roughness: 0.35,
    });

    const glowCoreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
    });

    const visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0099ff,
      emissiveIntensity: 1.0,
      roughness: 0.1,
      metalness: 0.5,
    });

    const cyanAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.2,
    });

    // 4. Construct Humanoid Robot
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // Torso / Chest
    const chestGroup = new THREE.Group();
    const chestGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.95, 8);
    const chestMesh = new THREE.Mesh(chestGeo, armorMaterial);
    chestMesh.position.y = 1.35;
    chestMesh.scale.set(1.1, 1, 0.75);
    chestGroup.add(chestMesh);

    // Chest Core Arc Reactor (Glowing)
    const coreGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.08, 24);
    const coreMesh = new THREE.Mesh(coreGeo, glowCoreMaterial);
    coreMesh.rotation.x = Math.PI / 2;
    coreMesh.position.set(0, 1.45, 0.36);
    chestGroup.add(coreMesh);

    const coreRingGeo = new THREE.TorusGeometry(0.18, 0.02, 16, 32);
    const coreRing = new THREE.Mesh(coreRingGeo, darkJointMaterial);
    coreRing.position.set(0, 1.45, 0.36);
    chestGroup.add(coreRing);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.15, 0.18, 0.25, 16);
    const neckMesh = new THREE.Mesh(neckGeo, darkJointMaterial);
    neckMesh.position.y = 1.9;
    chestGroup.add(neckMesh);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 2.15, 0);

    const headGeo = new THREE.BoxGeometry(0.48, 0.52, 0.46);
    const headMesh = new THREE.Mesh(headGeo, armorMaterial);
    headGroup.add(headMesh);

    // Visor / Eyes
    const visorGeo = new THREE.BoxGeometry(0.42, 0.12, 0.15);
    const visorMesh = new THREE.Mesh(visorGeo, visorMaterial);
    visorMesh.position.set(0, 0.04, 0.21);
    headGroup.add(visorMesh);

    // Ear Antennas
    const earGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.18, 12);
    const earLeft = new THREE.Mesh(earGeo, cyanAccentMaterial);
    earLeft.rotation.z = Math.PI / 2;
    earLeft.position.set(-0.28, 0.05, 0);
    headGroup.add(earLeft);

    const earRight = new THREE.Mesh(earGeo, cyanAccentMaterial);
    earRight.rotation.z = Math.PI / 2;
    earRight.position.set(0.28, 0.05, 0);
    headGroup.add(earRight);

    chestGroup.add(headGroup);

    // Shoulders
    const shoulderGeo = new THREE.SphereGeometry(0.18, 16, 16);

    // Left Arm (Relaxed)
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.72, 1.7, 0);
    const shoulderLeft = new THREE.Mesh(shoulderGeo, darkJointMaterial);
    leftArmGroup.add(shoulderLeft);

    const bicepGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.45, 12);
    const bicepLeft = new THREE.Mesh(bicepGeo, armorMaterial);
    bicepLeft.position.set(0, -0.3, 0);
    leftArmGroup.add(bicepLeft);

    const elbowLeft = new THREE.Mesh(shoulderGeo, darkJointMaterial);
    elbowLeft.position.set(0, -0.55, 0);
    elbowLeft.scale.set(0.7, 0.7, 0.7);
    leftArmGroup.add(elbowLeft);

    const forearmGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.42, 12);
    const forearmLeft = new THREE.Mesh(forearmGeo, armorMaterial);
    forearmLeft.position.set(0, -0.82, 0.05);
    leftArmGroup.add(forearmLeft);

    const handGeo = new THREE.BoxGeometry(0.12, 0.14, 0.06);
    const handLeft = new THREE.Mesh(handGeo, cyanAccentMaterial);
    handLeft.position.set(0, -1.08, 0.05);
    leftArmGroup.add(handLeft);

    chestGroup.add(leftArmGroup);

    // Right Arm (Articulated Waving Arm)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.72, 1.7, 0);

    const shoulderRight = new THREE.Mesh(shoulderGeo, darkJointMaterial);
    rightArmGroup.add(shoulderRight);

    const bicepRight = new THREE.Mesh(bicepGeo, armorMaterial);
    bicepRight.position.set(0, -0.26, 0);
    rightArmGroup.add(bicepRight);

    // Elbow Pivot
    const elbowGroup = new THREE.Group();
    elbowGroup.position.set(0, -0.52, 0);
    const elbowRight = new THREE.Mesh(shoulderGeo, darkJointMaterial);
    elbowRight.scale.set(0.7, 0.7, 0.7);
    elbowGroup.add(elbowRight);

    const forearmRight = new THREE.Mesh(forearmGeo, armorMaterial);
    forearmRight.position.set(0, -0.24, 0);
    elbowGroup.add(forearmRight);

    // Wrist / Hand Pivot
    const wristGroup = new THREE.Group();
    wristGroup.position.set(0, -0.46, 0);
    const handRight = new THREE.Mesh(handGeo, cyanAccentMaterial);
    handRight.position.set(0, -0.07, 0);
    wristGroup.add(handRight);

    // Fingers on waving hand
    for (let f = -1; f <= 1; f++) {
      const fingerGeo = new THREE.CylinderGeometry(0.016, 0.012, 0.08, 8);
      const finger = new THREE.Mesh(fingerGeo, cyanAccentMaterial);
      finger.position.set(f * 0.04, -0.16, 0);
      wristGroup.add(finger);
    }

    elbowGroup.add(wristGroup);
    rightArmGroup.add(elbowGroup);
    chestGroup.add(rightArmGroup);

    // Pelvis & Legs
    const pelvisGeo = new THREE.CylinderGeometry(0.38, 0.32, 0.32, 16);
    const pelvisMesh = new THREE.Mesh(pelvisGeo, darkJointMaterial);
    pelvisMesh.position.y = 0.72;
    robotGroup.add(pelvisMesh);

    // Left Leg
    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.25, 0.58, 0);
    const thighGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.65, 12);
    const thighLeft = new THREE.Mesh(thighGeo, armorMaterial);
    thighLeft.position.y = -0.35;
    leftLegGroup.add(thighLeft);

    const kneeLeft = new THREE.Mesh(shoulderGeo, darkJointMaterial);
    kneeLeft.position.y = -0.72;
    kneeLeft.scale.set(0.75, 0.75, 0.75);
    leftLegGroup.add(kneeLeft);

    const shinGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.62, 12);
    const shinLeft = new THREE.Mesh(shinGeo, armorMaterial);
    shinLeft.position.y = -1.1;
    leftLegGroup.add(shinLeft);

    const footGeo = new THREE.BoxGeometry(0.18, 0.12, 0.35);
    const footLeft = new THREE.Mesh(footGeo, cyanAccentMaterial);
    footLeft.position.set(0, -1.45, 0.08);
    leftLegGroup.add(footLeft);
    robotGroup.add(leftLegGroup);

    // Right Leg
    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.25, 0.58, 0);
    const thighRight = new THREE.Mesh(thighGeo, armorMaterial);
    thighRight.position.y = -0.35;
    rightLegGroup.add(thighRight);

    const kneeRight = new THREE.Mesh(shoulderGeo, darkJointMaterial);
    kneeRight.position.y = -0.72;
    kneeRight.scale.set(0.75, 0.75, 0.75);
    rightLegGroup.add(kneeRight);

    const shinRight = new THREE.Mesh(shinGeo, armorMaterial);
    shinRight.position.y = -1.1;
    rightLegGroup.add(shinRight);

    const footRight = new THREE.Mesh(footGeo, cyanAccentMaterial);
    footRight.position.set(0, -1.45, 0.08);
    rightLegGroup.add(footRight);
    robotGroup.add(rightLegGroup);

    robotGroup.add(chestGroup);

    // Holographic Orbital Rings around Robot
    const ring1Geo = new THREE.TorusGeometry(1.4, 0.015, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.position.y = 1.1;
    robotGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.75, 0.012, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x1677d2, transparent: true, opacity: 0.45 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.8;
    ring2.rotation.y = Math.PI / 6;
    ring2.position.y = 1.1;
    robotGroup.add(ring2);

    // Floating Particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 6 + 1.2;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Ground platform / soft glow disc
    const platformGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.08, 32);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.4,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.92;
    scene.add(platform);

    const platformRingGeo = new THREE.RingGeometry(1.82, 1.9, 32);
    const platformRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
    const platformRing = new THREE.Mesh(platformRingGeo, platformRingMat);
    platformRing.rotation.x = -Math.PI / 2;
    platformRing.position.y = -0.87;
    scene.add(platformRing);

    // Mouse Tracking for natural head follow
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width) * 2 - 1;
      mouse.targetY = -(clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Natural idle hover & breathing
      const hoverY = Math.sin(elapsed * 1.5) * 0.06;
      robotGroup.position.y = hoverY;

      // Subtle body turn towards mouse
      robotGroup.rotation.y = mouse.x * 0.25;

      // Head tracking
      headGroup.rotation.y = mouse.x * 0.45;
      headGroup.rotation.x = -mouse.y * 0.25;

      // Left Arm subtle breathing movement
      leftArmGroup.rotation.z = 0.08 + Math.sin(elapsed * 1.5) * 0.04;

      // Real 3D Waving Hand "Hi!" Animation
      // When isSpeaking or on introStage, robot raises arm and waves enthusiastically:
      const shouldWave = isSpeakingRef.current || stageRef.current === 0 || (Math.sin(elapsed * 0.7) > 0.1);

      if (shouldWave) {
        // Raise arm up into waving position
        rightArmGroup.rotation.z = THREE.MathUtils.lerp(rightArmGroup.rotation.z, -1.75, 0.08);
        rightArmGroup.rotation.x = THREE.MathUtils.lerp(rightArmGroup.rotation.x, -0.35, 0.08);
        rightArmGroup.rotation.y = THREE.MathUtils.lerp(rightArmGroup.rotation.y, 0.4, 0.08);

        // Bend elbow up towards camera
        elbowGroup.rotation.z = THREE.MathUtils.lerp(elbowGroup.rotation.z, -1.1, 0.08);
        elbowGroup.rotation.x = THREE.MathUtils.lerp(elbowGroup.rotation.x, 0.2, 0.08);

        // Wave hand vigorously left and right (Hi gesture!)
        const waveAngle = Math.sin(elapsed * 7.5) * 0.48;
        wristGroup.rotation.z = waveAngle;
        wristGroup.rotation.y = Math.sin(elapsed * 7.5) * 0.22;
      } else {
        // Natural resting arm position
        rightArmGroup.rotation.z = THREE.MathUtils.lerp(rightArmGroup.rotation.z, -0.08, 0.05);
        rightArmGroup.rotation.x = THREE.MathUtils.lerp(rightArmGroup.rotation.x, 0, 0.05);
        rightArmGroup.rotation.y = THREE.MathUtils.lerp(rightArmGroup.rotation.y, 0, 0.05);
        elbowGroup.rotation.z = THREE.MathUtils.lerp(elbowGroup.rotation.z, 0, 0.05);
        wristGroup.rotation.z = THREE.MathUtils.lerp(wristGroup.rotation.z, 0, 0.05);
      }

      // Visor & Core glowing pulse
      if (isSpeakingRef.current) {
        headGroup.position.y = 2.15 + Math.sin(elapsed * 8) * 0.02;
        const pulse = 0.8 + Math.sin(elapsed * 14) * 0.4;
        coreMesh.scale.set(1 + pulse * 0.15, 1 + pulse * 0.15, 1);
        visorMaterial.emissiveIntensity = 0.9 + pulse * 0.6;
      } else {
        visorMaterial.emissiveIntensity = 0.9;
        coreMesh.scale.set(1, 1, 1);
      }

      // Orbiting rings
      ring1.rotation.z = elapsed * 0.4;
      ring2.rotation.z = -elapsed * 0.3;

      // Floating particles slow rotation
      particles.rotation.y = elapsed * 0.05;

      // Transition out: robot moves smoothly to the right
      if (transitioningRef.current) {
        robotGroup.position.x += (2.4 - robotGroup.position.x) * 0.05;
        robotGroup.scale.x += (0.8 - robotGroup.scale.x) * 0.05;
        robotGroup.scale.y += (0.8 - robotGroup.scale.y) * 0.05;
        robotGroup.scale.z += (0.8 - robotGroup.scale.z) * 0.05;
      } else {
        robotGroup.position.x += (0 - robotGroup.position.x) * 0.05;
        robotGroup.scale.set(1, 1, 1);
      }

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
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
    />
  );
};
