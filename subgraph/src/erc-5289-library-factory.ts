import { LibraryCreated as LibraryCreatedEvent } from "../generated/ERC5289LibraryFactory/ERC5289LibraryFactory"
import { LibraryCreated } from "../generated/schema"

export function handleLibraryCreated(event: LibraryCreatedEvent): void {
  let entity = new LibraryCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wallet = event.params.wallet
  entity.libraryAddress = event.params.libraryAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
