import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Trail } from "@react-three/drei";
import * as THREE from "three";

function useScrollVelocity() {
  const velocityRef = useRef(0);
  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastT, 1);
      const dy = window.scrollY - lastY;
      velocityRef.current = dy / dt;
      lastY = window.scrollY;
      lastT = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return velocityRef;
}

function ParallaxRig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null!);
  const basePosition: [number, number, number] = [1.1, -0.1, 0];
  const scrollVelocity = useScrollVelocity();

  useFrame((state, delta) => {
    const { pointer } = state;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.25, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, basePosition[0] + pointer.x * 0.15, 0.05);
    // gentle extra spin proportional to how fast the page is being scrolled
    group.current.rotation.z += scrollVelocity.current * delta * 0.6;
    scrollVelocity.current = THREE.MathUtils.lerp(scrollVelocity.current, 0, 0.08);
  });

  return (
    <group ref={group} position={basePosition}>
      {children}
    </group>
  );
}

function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const pulseRef = useRef(0);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z += delta * 0.04;

    pulseRef.current = THREE.MathUtils.lerp(pulseRef.current, 0, 0.06);
    const targetScale = 1 + pulseRef.current + (hovered ? 0.08 : 0);
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh
        ref={meshRef}
        onClick={() => {
          pulseRef.current = 0.35;
        }}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[1.05, 4]} />
        <MeshDistortMaterial
          color="#0f766e"
          emissive="#134e4a"
          emissiveIntensity={hovered ? 1 : 0.6}
          distort={0.4}
          speed={1.8}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>
    </Float>
  );
}

function OrbitShapes() {
  const knotRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (knotRef.current) knotRef.current.rotation.x += delta * 0.3;
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[1.5, 1.1, 0.6]}>
        <mesh>
          <torusGeometry args={[0.22, 0.08, 16, 32]} />
          <meshStandardMaterial color="#eab308" emissive="#854d0e" emissiveIntensity={0.4} roughness={0.35} metalness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.6} position={[-1.1, -0.9, 0.4]}>
        <mesh>
          <octahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#115e59" emissiveIntensity={0.4} roughness={0.35} metalness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.4} position={[0.5, -1.4, 0.8]}>
        <mesh>
          <boxGeometry args={[0.24, 0.24, 0.24]} />
          <meshStandardMaterial color="#5eead4" emissive="#134e4a" emissiveIntensity={0.4} roughness={0.3} metalness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={1.5} floatIntensity={1.8} position={[-1.7, 1.3, -0.3]}>
        <mesh>
          <dodecahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#f2e3b8" emissive="#854d0e" emissiveIntensity={0.35} roughness={0.35} metalness={0.2} />
        </mesh>
      </Float>
      <Trail width={1.2} length={4} color="#2dd4bf" attenuation={(t) => t * t}>
        <Float speed={2.4} rotationIntensity={0.6} floatIntensity={2.2} position={[0.2, 1.8, -0.5]}>
          <mesh ref={knotRef}>
            <torusKnotGeometry args={[0.14, 0.045, 100, 16]} />
            <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={0.5} roughness={0.3} metalness={0.3} />
          </mesh>
        </Float>
      </Trail>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[5, 5, 5]} intensity={55} color="#2dd4bf" />
      <pointLight position={[-5, -3, -5]} intensity={30} color="#eab308" />
      <pointLight position={[2, 1, 4]} intensity={30} color="#ffffff" />
      <Suspense fallback={null}>
        <ParallaxRig>
          <CoreShape />
          <OrbitShapes />
        </ParallaxRig>
        <Sparkles count={50} scale={[6, 5, 3]} size={2} speed={0.3} color="#2dd4bf" opacity={0.35} />
      </Suspense>
    </Canvas>
  );
}
