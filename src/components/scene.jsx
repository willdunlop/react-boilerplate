import React, { Component } from 'react';
import * as THREE from 'three';

export default class Scene extends Component {
    constructor(props) {
        super(props);

        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        //  Create the assets
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);

        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

        //  Adjust the camera position
        camera.position.z = 5;

        renderer.setSize(width, height);
        scene.add(cube);
        scene.add(directionalLight);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.material = material;
        this.cube = cube;
    
        this.mount.appendChild(this.renderer.domElement);

        this.animate();
    }

    animate() {
        //  Informs the browser that an animation is about to occur in the animate (this) function.
        window.requestAnimationFrame(this.animate);
        //  Increases the cubes x and y rotation values by 0.1
        this.cube.rotation.x += 0.1;
        this.cube.rotation.y += 0.1;
        //  Re-renders the scene after the change in rotation
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return (
          <div
            className="scene"
            ref={(mount) => { this.mount = mount }}
          />
        )
      }
}