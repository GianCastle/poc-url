import ShortUrlModel, { ShortUrl } from "../models/short-url.model";
import { uuid } from 'uuidv4';
import CreateShortUrlInput from "../interfaces/create-short-url-input.interface";
import validUrl from 'valid-url';
import shortid from 'shortid';
import config from "../config/env.config";

export default class ShortUrlsService {

    constructor() {}

    getShortUrls(): Promise<ShortUrlModel[]> {
        return new Promise((resolve, reject) => {
            ShortUrlModel.findAll().then(resolve).catch(reject);
        });
    }

    getUrlByShortId(shortId: string): Promise<ShortUrlModel | null> {
        return new Promise((resolve, reject) => {
            ShortUrlModel.findOne({
                where: {
                    shortId
                }
            }).then(resolve).catch(reject);
        });
    }

    createShortUrl(url: CreateShortUrlInput): Promise<ShortUrlModel> {
        return new Promise((resolve, reject) => {
            if (!validUrl.isUri(url.longUrl)) {
                reject(new Error('Invalid base URL'));
            }
            const urlCode = shortid.generate();
            const newShortUrl: ShortUrl = {
                id: uuid(),
                shortId: urlCode,
                shortUrl: `${config.APP_URL}/${urlCode}`,
                longUrl: url.longUrl
            }
            ShortUrlModel.create(newShortUrl).then(resolve).catch(reject);
        });
    }

    deleteShortUrl(shortId: string): Promise<number> {
        return new Promise((resolve, reject) => {
            ShortUrlModel.destroy({
                where: {
                    shortId
                }
            }).then(resolve).catch(reject);
        });
    }

}