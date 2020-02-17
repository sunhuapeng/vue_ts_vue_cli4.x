import * as THREE from 'three';
class InitScene {
    public container: any | undefined
    private scene: any | undefined
    private camera: any | undefined
    private renderer: any = new THREE.WebGLRenderer()
    private cube: any | undefined
    constructor(dom: any) {
        this.container = dom
    }
    init() {
        if (!this.container) return
        this.initScene()
        this.initCamera()
        this.init3Drenderer()
        this.animate();
    }
    initScene(): void {
        this.scene = new THREE.Scene();;
    }
    initCamera(): void {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.z = 5;
    }
    init3Drenderer(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
    }

    add(mesh:any | undefined) {
        if(mesh.isMesh){
            this.cube = mesh
            this.scene.add(mesh);
        }
        // var geometry = new THREE.BoxGeometry(1, 1, 1);
        // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // this.cube = new THREE.Mesh(geometry, material);
    }
    animate() {
        requestAnimationFrame(()=>{
            this.render()
        });
        
    }
    render() {
        this.animate();
        if(this.cube){
            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
        }
        this.renderer.render(this.scene, this.camera);
    }
}
class CreatMesh{
    constructor(){
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        return new THREE.Mesh(geometry, material);
    }
}
export { InitScene, CreatMesh }