import { container } from "tsyringe";

import LocalStorageProvider from "./StorageProviders/implementations/LocalStorageProvider";
import S3StorageProvider from "./StorageProviders/implementations/S3StrorageProvider";
import IStorageProvider from "./StorageProviders/IStorageProvider";

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.DISK]
);
