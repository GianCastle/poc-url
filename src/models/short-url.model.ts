import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

export interface ShortUrl {
  id: string;
  shortId: string;
  shortUrl: string;
  longUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class ShortUrlModel extends Model<ShortUrl> {}
ShortUrlModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    shortId: {
      type: DataTypes.STRING,
      unique: true,
    },
    shortUrl: {
      type: DataTypes.STRING,
    },
    longUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: db,
    tableName: 'ShortUrls',
  }
);
