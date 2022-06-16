import { container } from "tsyringe";

import IMailProvider from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtheralMailProvider";
import LocalStorageProvider from "./StorageProviders/implementations/LocalStorageProvider";
import S3StorageProvider from "./StorageProviders/implementations/S3StrorageProvider";
import IStorageProvider from "./StorageProviders/IStorageProvider";

const MailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
};
container.registerInstance<IMailProvider>(
  "MailProvider",
  MailProvider[process.env.MAIL_PROVIDER]
);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.DISK]
);
