import { StorageRepository, IStorageRepositoryFindConfig } from "../data/repositories/StorageRepository";
import { IFile } from "../domain/structures/interfaces/IFile";

export class StorageService {
  private readonly repository: StorageRepository

  constructor (repository: StorageRepository) {
    this.repository = repository
  }

  async find (id: string, { ttl = 60 }: IStorageRepositoryFindConfig): Promise<IFile> {
    const file = this.repository.findById(id, { ttl })

    return file
  }
}
