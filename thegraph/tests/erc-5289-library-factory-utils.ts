import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { LibraryCreated } from "../generated/ERC5289LibraryFactory/ERC5289LibraryFactory"

export function createLibraryCreatedEvent(
  wallet: Address,
  libraryAddress: Address
): LibraryCreated {
  let libraryCreatedEvent = changetype<LibraryCreated>(newMockEvent())

  libraryCreatedEvent.parameters = new Array()

  libraryCreatedEvent.parameters.push(
    new ethereum.EventParam("wallet", ethereum.Value.fromAddress(wallet))
  )
  libraryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "libraryAddress",
      ethereum.Value.fromAddress(libraryAddress)
    )
  )

  return libraryCreatedEvent
}
