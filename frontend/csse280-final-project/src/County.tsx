type County = {
    name: string
    path: Path2D
    color: string
    onClick: (county_id: string, e: Event) => void
}

export default County;