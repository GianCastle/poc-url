import ShortUrlsService from "../services/short-urls.service";
import ShortUrlsController from "./short-urls.controller";

export default class Controllers {

    private shortsUrlsService = new ShortUrlsService();    
    public shortUrlsController = new ShortUrlsController(this.shortsUrlsService);

    constructor() {}

}