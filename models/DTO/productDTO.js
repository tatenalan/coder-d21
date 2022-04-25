function createProductDTO(product, _id, datetime) {
    return {
        ...product,
        _id,
        datetime
    }
}

export default createProductDTO