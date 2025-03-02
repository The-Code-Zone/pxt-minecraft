let _saved_position = positions.create(0, 0, 0)

namespace positions {

    //% block weight=100
    //% pos.shadow=minecraftCreatePositionCamera
    export function save(pos: Position): void {
        _saved_position = pos.toWorld()
    }

    //% block="@ $x @ $y @ $z"
    export function load(x: number, y: number, z: number) {
        return positions.add(
            _saved_position,
            positions.createWorld(x, y, z)
        )
    }

}