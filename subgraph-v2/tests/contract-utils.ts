import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { LibraryCreated } from "../generated/Contract/Contract"

export function createLibraryCreatedEvent(
  wallet: Address,
  libraryAddress: Address,
  title: string,
  description: string
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
  libraryCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  libraryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return libraryCreatedEvent
}
