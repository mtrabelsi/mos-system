export type DataType = {
    id: string,
}

export type TableItemProps = {
    itemData: DataType,
    itemClickHandler: (id: string) => void
}