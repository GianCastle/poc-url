import express, { Request, Response } from 'express';
import Controller from '../interfaces/controller.interface';
import ShortUrlsService from '../services/short-urls.service';

export default class ShortUrlsController implements Controller {
  public path = '/short-urls';
  public router = express.Router();

  constructor(private shortsUrlsService: ShortUrlsService) {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.post('', this.createShortUrl.bind(this));
    this.router.get('', this.getShortUrls.bind(this));
    this.router.get('/:shortId', this.getUrlByShortId.bind(this));
    this.router.delete('/:shortId', this.deleteShortUrl.bind(this));
  }

  getShortUrls(req: Request, res: Response): void {
    this.shortsUrlsService
      .getShortUrls()
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  getUrlByShortId(req: Request, res: Response): void {
    this.shortsUrlsService
      .getUrlByShortId(req.params.shortId)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(404).json(error));
  }

  createShortUrl(req: Request, res: Response): void {
    this.shortsUrlsService
      .createShortUrl(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  deleteShortUrl(req: Request, res: Response): void {
    this.shortsUrlsService
      .deleteShortUrl(req.params.shortId)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }
}
