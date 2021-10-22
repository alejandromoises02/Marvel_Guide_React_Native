class ItemData{
    constructor(id,title, urlImage, description, buttonTitle, categoryID, related) {
        this.id = id.toString();
        this.title = title;
        this.urlImage = urlImage;
        this.description = description;
        this.buttonTitle = buttonTitle;
        this.categoryID = categoryID;
        this.related = related;
    }
};
export default ItemData
