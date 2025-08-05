let _saved_position = positions.create(0, 0, 0)

//% block="Saved Positions" weight=55 color=#965975 icon="\uf0c7"
namespace positions2 {

    //% block weight=100
    //% pos.shadow=minecraftCreatePositionCamera
    export function save(pos: Position): void {
        _saved_position = pos.toWorld()
    }

    //% block="@ $x @ $y @ $z"
    //% weight=90
    export function load(x: number, y: number, z: number) {
        return positions.add(
            _saved_position,
            positions.createWorld(x, y, z)
        )
    }

    //% block="change saved %axis by %value"
    //% weight=80
    export function change(axis: Axis, value: number) {
        switch(axis) {
            case Axis.X:
                save(load(value, 0, 0))
                break
            case Axis.Y:
                save(load(0, value, 0))
                break
            case Axis.Z:
                save(load(0, 0, value))
                break
        }
    }

}