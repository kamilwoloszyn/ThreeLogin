import React from 'react';
import { BoxBufferGeometry, Geometry, Group, MeshStandardMaterial, Mesh, Scene } from 'three';

interface Props { 

}

export const Box = ()=> {
    const BoxScene:Scene = new Scene()
    const BoxGroup: React.NamedExoticComponent<Group>= new Group();
    const BoxGeometry: BoxBufferGeometry = new BoxBufferGeometry(2,2,2);
    const BoxMaterial: MeshStandardMaterial = new MeshStandardMaterial({color:0x1fbeca});
    const BoxMesh = new Mesh(BoxGeometry,BoxMaterial);
    BoxGroup.position.set(0,0.1,0.1);    
    BoxGroup.add(BoxMesh);
    BoxScene.add(BoxGroup);
    return (
        <BoxGroup position={[0,0.1,0.1]}>
                <BoxMesh>  
            sofhsofsdj
                </BoxMesh>
        </BoxGroup>
    )
}