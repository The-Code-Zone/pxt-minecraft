let _saved_position = positions.create(0, 0, 0)

<<<<<<< HEAD:extensions/positions_extended.ts
namespace positions {
=======
//% block="Saved Positions" weight=55 color=#965975 icon="\uf0c7"
namespace positions2 {
>>>>>>> parent of 39dd7ea (renamed positions namespace):extensions/positions2.ts

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