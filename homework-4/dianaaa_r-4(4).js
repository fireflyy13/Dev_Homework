class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection
        this.itemsPerPage = itemsPerPage
    }
    itemCount() {
        return this.collection.length
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        let start = pageIndex * this.itemsPerPage
        let end = start + this.itemsPerPage

        if(pageIndex < 0 || pageIndex >= Math.ceil(this.collection.length / this.itemsPerPage) ) {return -1}
        let items = this.collection.slice(start, end)
        return items.length
    }
    pageIndex(itemIndex) {
        let index = itemIndex / this.itemsPerPage
        let result = parseInt(index)
        if (itemIndex >= this.collection.length || itemIndex < 0 || result < 0 || result > Math.ceil(this.collection.length / this.itemsPerPage)) return -1
        if (this.collection.length === 0) return -1
        return result
    }
}